import CommentsThread from "./components/CommentsThread";

const CommentsContainer = ({ activePostId, allComments, onSubmitComment }) => {
  return (
    <>
      {Object.entries(allComments).map(([id, comment]) => (
        <CommentsThread
          key={id}
          activePostId={activePostId}
          comment={comment}
          path={[]}
          onSubmitComment={onSubmitComment}
        />
      ))}
    </>
  );
};

export default CommentsContainer;
