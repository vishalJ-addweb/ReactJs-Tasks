import React from 'react';
import Navbar from './components/common/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/common/Home';
import UsersFuncReducer from './components/users/UsersFuncReducer';
import Posts from './components/posts/Posts';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/users" element={<UsersFuncReducer />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
