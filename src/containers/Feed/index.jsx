import React from "react";
import PostComponent from "../../components/PostComponent";

const POSTS = {
  1: {
    id: 1,
    content: "Post 1",
    timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
    allComments: {
      // id: Comment
      123: {
        id: 123,
        content: "comnment content 1",
        timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
        child: {
          12112: {
            id: 12112,
            content: "child1 comnment content 1",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
          12113: {
            id: 12113,
            content: "child2 comnment content 1",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
        },
      },
      124: {
        id: 124,
        content: "comnment content 2",
        timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
        child: {
          121121: {
            id: 121121,
            content: "child1 comnment content 2",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
          121131: {
            id: 121131,
            content: "child2 comnment content 2",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
        },
      },
    },
  },
  2: {
    id: 2,
    content: "Post 2",
    timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
    allComments: {
      125: {
        id: 125,
        content: "comment content 3",
        timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
        child: {
          12114: {
            id: 12114,
            content: "child1 comment content 3",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
          12115: {
            id: 12115,
            content: "child2 comment content 3",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
        },
      },
    },
  },
  3: {
    id: 3,
    content: "Post 3",
    timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
    allComments: {
      126: {
        id: 126,
        content: "comment content 4",
        timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
        child: {
          12116: {
            id: 12116,
            content: "child1 comment content 4",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
        },
      },
    },
  },
  4: {
    id: 4,
    content: "Post 4",
    timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
    allComments: {
      127: {
        id: 127,
        content: "comment content 5",
        timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000)),
        child: {
          12117: {
            id: 12117,
            content: "child1 comment content 5",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
          12118: {
            id: 12118,
            content: "child2 comment content 5",
            timestamp: new Date(
              Date.now() - Math.floor(Math.random() * 10000000),
            ),
            child: {},
          },
        },
      },
    },
  },
};

const Feed = ({ onPinPost, pinnedPostId }) => {
  const [posts, setPosts] = React.useState(POSTS);
  const onSubmitComment = (activePostId, commentContent, path) => {
    const newCommentId = new Date().getSeconds();
    if (path?.length === 0) {
      setPosts((posts) => ({
        ...posts,
        [activePostId]: {
          ...posts[activePostId],
          allComments: {
            ...posts[activePostId].allComments,
            newCommentId: {
              id: newCommentId,
              content: commentContent,
              child: {},
            },
          },
        },
      }));
    } else {
      setPosts((posts) => {
        const updatedPosts = { ...posts };
        let currentCommentTree = updatedPosts[activePostId].allComments;
        path.forEach((commentId) => {
          currentCommentTree = currentCommentTree[commentId].child;
        });
        currentCommentTree[newCommentId] = {
          id: newCommentId,
          content: commentContent,
          child: {},
        };
        return updatedPosts;
      });
    }
  };

  const handlePinPost = (postId) => {
    const postToPin = posts[postId];
    onPinPost(postToPin);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "600px",
        margin: "0 auto",
        gap: "20px",
      }}
    >
      {Object.values(posts)
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((postData) => (
          <PostComponent
            key={postData.id}
            postData={postData}
            onPinPost={handlePinPost}
            isPinned={postData.id === pinnedPostId}
            onSubmitComment={onSubmitComment}
          />
        ))}
    </div>
  );
};

export default Feed;
