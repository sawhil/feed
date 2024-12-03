import "./App.css";
import Feed from "./containers/Feed";
import PinnedPostWidget from "./components/PinnedPostWidget";
import { useState } from "react";

function App() {
  const [pinnedPost, setPinnedPost] = useState(null);
  const [pinnedPostPosition, setPinnedPostPosition] = useState({ x: 20, y: 20 });

  const handlePinPost = (post) => {
    setPinnedPost(post);
  };

  const handleUnpinPost = () => {
    setPinnedPost(null);
  };

  return (
    <div className="app-container">
      {pinnedPost && (
        <PinnedPostWidget
          post={pinnedPost}
          position={pinnedPostPosition}
          onPositionChange={setPinnedPostPosition}
          onUnpin={handleUnpinPost}
        />
      )}
      <Feed onPinPost={handlePinPost} pinnedPostId={pinnedPost?.id} />
    </div>
  );
}

export default App;
