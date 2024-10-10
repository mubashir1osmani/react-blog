
import './App.css';
import React from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
// import createAccount from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
function App() {
  return (
    <BrowserRouter>
  
    <div className="App">
      <NavBar/>
      {/* <h1>Times Now</h1> */}
      <div id="page-body">
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/articles" element={<ArticlesListPage/>} />
          <Route path="/articles/:articleId" element={<ArticlePage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/create-account' element={<CreateAccountPage/>}/>
          {/* <Route path='/create-account' element = {<createAccount />} />  */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
