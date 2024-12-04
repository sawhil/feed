import "./App.css";
import Feed from "./containers/Feed";
import PinnedPostWidget from "./components/PinnedPostWidget";
import { usePosts } from "./hooks/usePosts";

function App() {
  const {newPostsAvailable, posts, submitComment, loadPostsFromStore: loadPosts} = usePosts();

  return (
    <div className="app-container">
      {newPostsAvailable && <button style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000, backgroundColor: '#0077B5', color: 'white', borderRadius: '4px', padding: '10px 20px', cursor: 'pointer' }} onClick={loadPosts}>Refresh</button>}
      <PinnedPostWidget submitComment={submitComment}/>
      <Feed posts={posts} submitComment={submitComment}/>
    </div>
  );
}

export default App;
