import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold text-purple-600"
        >
          QuizMaster
        </Link>

        <div className="flex gap-8 font-medium">
          <Link to="/">Home</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/categories">Categories</Link>
        </div>

      </div>
    </nav>
  );
}