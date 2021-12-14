import React from 'react';
import ShowUser from './users/ShowUser';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import ShowPost from './posts/ShowPost';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/users" element={<ShowUser />} />
          <Route path="/posts" element={<ShowPost />} />
        </Routes>
      </Router>

    </>

  );
}

export default App;
