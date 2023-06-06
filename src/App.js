import './App.scss';
import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import PostsListPage from './pages/PostsListPage/PostsListPage';
import AboutUserPage from './pages/AboutUserPage/AboutUserPage';
import AboutMePage from './pages/AboutMePage/AboutMePage';
import { getPosts, getUsers, pagingPosts, updatePageLoaded } from "./store/toolkitSllice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
function App() {
  const dispath = useDispatch();
  // Список постов будет загружаться при обновлении страницы 
  const pageLoaded = useSelector((state) => state.toolkit.pageLoaded);
  const postsFiltered = useSelector((state) => state.toolkit.postsFiltered);
  useEffect(() => {
    if (!pageLoaded) {
      dispath(getPosts())
      dispath(getUsers())
      dispath(updatePageLoaded(true))
      // dispath(pagingPosts(postsFiltered));
    }
  })
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<PostsListPage />} />
        <Route path='/user/:id' element={<AboutUserPage />} />
        <Route path='/about-me' element={<AboutMePage />} />
      </Routes>
    </div>
  );
}

export default App;
