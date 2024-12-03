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

// // if we are replying to a comment
// // Every Comment associated with a post
// // then we should have a repliedToId -> Which can be a commentId to which
// // it is replied to and if it's null then it's the top level comment

// // When I am creating a new comment
// // I'll update that comment into the Post's comment array's

// if (replyToId) {
//   // O(all comments nested included)
//   // search for the replyToId comment in Post's comment array
//   // and then add the id of this comment into the child of the replyToId
//   // comment
// }

// // add the comment into the comments array of the post
