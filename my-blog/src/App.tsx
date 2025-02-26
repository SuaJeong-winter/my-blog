import { useState } from "react";
import "./App.css";
import { Router, Routes, Navigate, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">PostLink</Link>
          </li>
          <li>
            <Link to="/posts/:id">PostDetail</Link>
          </li>
          <li>
            <Link to="/posts/new">PostNew</Link>
          </li>
          <li>
            <Link to="/posts/edit/:id">PostEdit</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/posts" element={<h1>Post List Page</h1>} />
        <Route path="/posts/:id" element={<h1>Post Detail Page</h1>} />
        <Route path="/posts/new" element={<h1>Post New Page</h1>} />
        <Route path="/posts/edit/:id" element={<h1>Post Edit Page</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
