import AppBar from "./Components/AppBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import Users from "./Components/Users";
import Courses from "./Components/Courses";
import Posts from "./Components/Posts";
import Profile from "./Components/Profile";
import Purchased from "./Components/Purchased";
function App() {
  return (
    <>
      <AppBar />
      <div className="flex ">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/posts" element={<Posts />}></Route>
            <Route path="/me" element={<Profile />}></Route>
            <Route path="/purchased" element={<Purchased />}></Route>
            <Route path="/users" element={<Users />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
