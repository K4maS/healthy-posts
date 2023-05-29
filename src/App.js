import './App.scss';
import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import PostsListPage from './pages/PostsListPage/PostsListPage';
import AboutUserPage from './pages/AboutUserPage/AboutUserPage';
import AboutMePage from './pages/AboutMePage/AboutMePage';
function App() {
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
