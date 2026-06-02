import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6">
        Quiz Application
      </h1>

      <Link
        to="/quiz"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Start Quiz
      </Link>
    </div>
  );
}