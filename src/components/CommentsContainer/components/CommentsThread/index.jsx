import CommentInput from "../CommentInput";
const CommentsThread = ({ activePostId, comment, path, onSubmitComment }) => {
  const newPath = [...path, comment?.id];
  return (
    <>
      <div
        className="comment-head"
        style={{
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #e1e1e1",
          borderRadius: "4px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {comment?.content}
      </div>
      <CommentInput
        onSubmitComment={onSubmitComment}
        path={newPath}
        activePostId={activePostId}
      />
      <div
        className="child-comment-container"
        style={{
          marginLeft: "20px",
          borderLeft: "2px solid #e1e1e1",
          paddingLeft: "20px",
        }}
      >
        {comment?.child &&
          Object.entries(comment.child).map(([id, childComment]) => (
            <CommentsThread
              key={id}
              comment={childComment}
              path={newPath}
              onSubmitComment={onSubmitComment}
              activePostId={activePostId}
            />
          ))}
      </div>
    </>
  );
};

export default CommentsThread;
