import { useState, useEffect, useRef } from "react";
import PostComponent from "../PostComponent";

const PinnedPostWidget = ({ post, position, onPositionChange, onUnpin }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const widgetRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = widgetRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        onPositionChange({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset, onPositionChange]);

  return (
    <div
      ref={widgetRef}
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
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
          onClick={onUnpin}
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
      {/* pass in the handlers to handle the comments addition */}
      <PostComponent postData={post} isPinned={true} />
    </div>
  );
};

export default PinnedPostWidget;
