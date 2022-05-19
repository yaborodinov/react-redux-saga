import FetchedPosts from './components/FetchedPosts';
import PostForm from './components/PostForm'
import Posts from './components/Posts'

import './styles/style.scss'

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
         <PostForm/>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2 className='text-muted text-center'>Синхронные посты</h2>
          <Posts/>
        </div>
        <div className="col">
          <h2 className='text-muted text-center'>Асинхронные посты</h2>
          <FetchedPosts/>
        </div>
      </div>
    </div>
  );
}

export default App;
