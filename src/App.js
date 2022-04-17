import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Blog from "./Components/Blog/Blog";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
