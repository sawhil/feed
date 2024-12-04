import PostComponent from "../../components/PostComponent";
import { useAtom } from "jotai";
import { pinnedPostIdAtom } from "../../store/atoms";

const Feed = ({ posts, submitComment }) => {
  const [pinnedPostId, setPinnedPostId] = useAtom(pinnedPostIdAtom);
  const handlePinPost = (postId) => {
    setPinnedPostId(postId);
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
            onSubmitComment={submitComment}
          />
        ))}
    </div>
  );
};

export default Feed;
