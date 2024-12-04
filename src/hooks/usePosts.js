import { useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { newPostsAvailableAtom, postsAtom } from '../store/atoms';
import { fetchPosts, createComment } from '../api/posts';

export const usePosts = () => {
  const [posts, setPosts] = useAtom(postsAtom);
  const [newPostsAvailable, setNewPostsAvailable] = useAtom(newPostsAvailableAtom);

  const loadPosts = useCallback(async () => {
    try {
      const data = await fetchPosts();
      setPosts(data);
      setNewPostsAvailable(false);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  }, [newPostsAvailable, setPosts]);

  const submitComment = useCallback(async (activePostId, commentContent, path) => {
    try {
      const newComment = await createComment(activePostId, commentContent, path);
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
      console.error('Failed to submit comment:', error);
    }
  }, [setPosts]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return {
    newPostsAvailable,
    posts,
    submitComment,
    loadPosts,
  };
}; 