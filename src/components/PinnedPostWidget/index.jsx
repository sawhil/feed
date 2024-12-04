import PostComponent from "../../components/PostComponent";
import usePinnedPostWidget from "../../hooks/usePinnedPostWidget";

const PinnedPostWidget = ({ submitComment }) => {
  const {
    pinnedPostId,
    pinnedPostPosition,
    pinnedPostData,
    widgetRef,
    isDragging,
    handleMouseDown,
    handleUnpinPost,
  } = usePinnedPostWidget();

  if (!pinnedPostId) return <></>;

  return (
    <div
      ref={widgetRef}
      style={{
        position: "fixed",
        left: pinnedPostPosition.x,
        top: pinnedPostPosition.y,
        zIndex: 1000,
        cursor: isDragging ? "grabbing" : "grab",
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        borderRadius: "8px",
        padding: "10px",
      }}
    >
      <div
        onMouseDown={handleMouseDown}
        style={{
          padding: "8px",
          backgroundColor: "#f0f0f0",
          borderRadius: "4px 4px 0 0",
          marginBottom: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>Pinned Post</span>
        <button
          onClick={handleUnpinPost}
          style={{
            padding: "4px 8px",
            backgroundColor: "#ff4444",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Unpin
        </button>
      </div>
      <PostComponent
        postData={pinnedPostData}
        isPinned={true}
        onSubmitComment={submitComment}
      />
    </div>
  );
};

export default PinnedPostWidget;
