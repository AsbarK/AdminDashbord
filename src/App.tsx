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
    <BrowserRouter>
      <>
        <AppBar />
        <div className="flex ">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/me" element={<Profile />} />
            <Route path="/users" element={<Users />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/purchased" element={<Purchased />} />
            <Route path="/notes" element={<Users />} />
            <Route path="/forms" element={<Users />} />
            <Route path="/calendar" element={<Users />} />
            <Route path="/setting" element={<Users />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
