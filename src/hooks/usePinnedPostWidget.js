import { useState, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import {
  pinnedPostIdAtom,
  pinnedPostPositionAtom,
  usePinnedPostData,
} from "../store/atoms";

const usePinnedPostWidget = () => {
  const [pinnedPostId, setPinnedPostId] = useAtom(pinnedPostIdAtom);
  const [pinnedPostPosition, setPinnedPostPosition] = useAtom(
    pinnedPostPositionAtom
  );
  const pinnedPostData = usePinnedPostData();

  const handleUnpinPost = () => {
    setPinnedPostId(null);
  };
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
        setPinnedPostPosition({ x: newX, y: newY });
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
  }, [isDragging, dragOffset, setPinnedPostPosition]);

  return {
    pinnedPostId,
    pinnedPostPosition,
    pinnedPostData,
    widgetRef,
    isDragging,
    handleMouseDown,
    handleUnpinPost,
  };
};

export default usePinnedPostWidget;
