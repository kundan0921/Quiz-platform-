import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Leaderboard from "./pages/Leaderboard";
import Categories from "./pages/Categories";
import Dashboard from "./pages/admin/Dashboard";
import AddQuestion from "./pages/admin/AddQuestion";
import ManageQuestions from "./pages/admin/ManageQuestions";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />

      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/add" element={<AddQuestion />} />
      <Route path="/admin/manage" element={<ManageQuestions />} />
      <Route path="/quiz/:category" element={<Quiz />}/>
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/quiz/:category" element={<Quiz />} />
      <Route path="/leaderboard" element={<Leaderboard />}/>
      <Route path="/categories" element={<Categories />} />
      <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />}/>
    </Routes>
  );
}