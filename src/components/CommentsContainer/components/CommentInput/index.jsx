import React from "react";
const CommentInput = ({ activePostId, onSubmitComment, path }) => {
  const [newComment, setNewComment] = React.useState("");
  return (
    <div style={{ display: "flex", gap: "8px", padding: "10px" }}>
      <input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
        style={{
          flex: 1,
          padding: "6px",
          fontSize: "14px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          outline: "none",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      />
      <button
        onClick={() => {
          onSubmitComment(activePostId, newComment, path);
        }}
        style={{
          padding: "6px 12px",
          backgroundColor: "#0066ff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "14px",
          cursor: "pointer",
          transition: "background-color 0.2s",
          ":hover": {
            backgroundColor: "#0052cc",
          },
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default CommentInput;
