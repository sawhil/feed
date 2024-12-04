import "./App.css";
import Feed from "./containers/Feed";
import PinnedPostWidget from "./components/PinnedPostWidget";
import { usePosts } from "./hooks/usePosts";

function App() {
  const {newPostsAvailable, posts, submitComment, loadPosts} = usePosts();

  return (
    <div className="app-container">
      {newPostsAvailable && <button onClick={loadPosts}>New Posts Available. Click to Refresh</button>}
      <PinnedPostWidget submitComment={submitComment}/>
      <Feed posts={posts} submitComment={submitComment}/>
    </div>
  );
}

export default App;
