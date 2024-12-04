import { useAtom } from "jotai";
import { v4 as uuid } from "uuid";
import { useCallback, useEffect } from "react";
import { newPostsAtom, newPostsAvailableAtom, postsAtom } from "../store/atoms";
import { fetchPosts, createComment } from "../api/posts";

export const usePosts = () => {
  const [posts, setPosts] = useAtom(postsAtom);
  const [newPosts, setNewPosts] = useAtom(newPostsAtom);
  const [newPostsAvailable, setNewPostsAvailable] = useAtom(
    newPostsAvailableAtom
  );

  const loadPosts = useCallback(
    async (initialLoad) => {
      try {
        // we can use some params like lastRefreshed or something
        // to set the cursor for pagination
        const data = await fetchPosts();
        if (initialLoad) {
          setPosts(data);
          if (newPostsAvailable) setNewPostsAvailable(false);
        } else {
          setNewPosts(data);
          if (!newPostsAvailable) setNewPostsAvailable(true);
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    },
    [setPosts]
  );

  const loadPostsFromStore = useCallback(() => {
    setNewPostsAvailable(false);
    const updatedPosts = { ...newPosts };
    // Dummy Data updation logic starts here
    // this won't be required when the new data would coming from BE
    Object.keys(newPosts).forEach((key) => {
      const newKey = uuid();
      updatedPosts[newKey] = {
        ...newPosts[key],
        id: newKey,
        content: `Dummy Content for PostID: ${newKey}`,
      };
      delete updatedPosts[key];
    });
    // Dummy Data logic ends here

    setPosts((posts) => ({ ...posts, ...updatedPosts }));
  }, [newPosts]);

  const submitComment = useCallback(
    async (activePostId, commentContent, path) => {
      try {
        const newComment = await createComment(
          activePostId,
          commentContent,
          path
        );
        setPosts((posts) => {
          const updatedPosts = { ...posts };
          if (path?.length === 0) {
            updatedPosts[activePostId] = {
              ...updatedPosts[activePostId],
              allComments: {
                ...updatedPosts[activePostId].allComments,
                [newComment.id]: newComment,
              },
            };
          } else {
            let currentCommentTree = updatedPosts[activePostId].allComments;
            path.forEach((commentId) => {
              currentCommentTree = currentCommentTree[commentId].child;
            });
            currentCommentTree[newComment.id] = newComment;
          }
          return updatedPosts;
        });
      } catch (error) {
        console.error("Failed to submit comment:", error);
      }
    },
    [setPosts]
  );

  // We are doing short polling to fetch the data periodically
  // Long Polling can be a better alternative here if we want to
  // have server controlled refresh
  // and server sent events would be better if we are considering
  // very frequent updates
  useEffect(() => {
    loadPosts(true); // initialLoad
    const interval = setInterval(loadPosts, 20000);
    return () => clearInterval(interval);
  }, [loadPosts]);

  return {
    newPostsAvailable,
    posts,
    submitComment,
    loadPostsFromStore,
  };
};

/*
every one minute we fetch the data from BE and populate newPosts and set
newPostsAvailable to true.

when user clicks on click to refresh we load the posts from store and set
newPostsAvailable to false.
*/
