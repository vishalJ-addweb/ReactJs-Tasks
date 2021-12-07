import React from 'react';
import Navbar from './components/common/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Posts from './components/posts/Posts';
// import Users from './components/users/Users';
// import UsersFunc from './components/users/UsersFunc';
import Home from './components/common/Home';
import UsersFuncReducer from './components/users/UsersFuncReducer';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/posts" element={<Posts />} />
          {/* <Route exact path="/users" element={<Users />} /> */}
          {/* <Route exact path="/users" element={<UsersFunc />} /> */}
          <Route exact path="/users" element={<UsersFuncReducer />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
