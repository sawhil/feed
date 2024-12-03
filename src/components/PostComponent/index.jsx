import CommentsContainer from "../CommentsContainer";
import CommentInput from "../CommentsContainer/components/CommentInput";
import { useState } from "react";

const PostComponent = ({ postData, onSubmitComment, onPinPost, isPinned }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div style={{ border: "2px solid black", display: "inline-block" }}>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          margin: "10px",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div>{postData?.content}</div>
        {!isPinned && (
          <button
            onClick={() => onPinPost(postData.id)}
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '4px 8px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '10px'
            }}
          >
            Pin Post
          </button>
        )}
      </div>

      <CommentInput
        onSubmitComment={onSubmitComment}
        path={[]}
        activePostId={postData?.id}
      />

      <button
        onClick={() => setShowComments(!showComments)}
        style={{
          backgroundColor: showComments ? "#ff6b6b" : "#4CAF50",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          margin: "10px",
          transition: "background-color 0.3s ease",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
        onMouseOver={(e) => {
          e.target.style.opacity = "0.9";
        }}
        onMouseOut={(e) => {
          e.target.style.opacity = "1";
        }}
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      {showComments && (
        <div
          style={{
            animation: "fadeIn 0.3s ease-in",
          }}
        >
          <CommentsContainer
            activePostId={postData?.id}
            allComments={postData?.allComments}
            onSubmitComment={onSubmitComment}
          />
        </div>
      )}
    </div>
  );
};

export default PostComponent;
