import React from "react";
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import PlayingVideo from "./components/PlayingVideo";
import Search from "./components/Search";
import Home from "./components/Home";
import { useAuth } from "./context/AuthProvider";
function App() {
 const { loading } = useAuth();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/search/:searchQuery" element={<Search/>} />
        <Route path="/video/:id" element={<PlayingVideo/>} />
      </Routes>
    </div>  
  );
}

export default App;
