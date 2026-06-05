import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import API from "../services/api";
import QuizSidebar from "../components/QuizSidebar";
import OptionCard from "../components/OptionCard";

export default function Quiz() {
  const { category } = useParams();

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    fetchQuestions();
  }, [category]);

  useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        clearInterval(timer);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);

  const fetchQuestions = async () => {
    try {
      const res = await API.get("/questions");

      const filteredQuestions = category
        ? res.data.filter(
            (q) =>
              q.category?.toLowerCase() ===
              category.toLowerCase()
          )
        : res.data;

      setQuestions(filteredQuestions);
    } catch (error) {
      console.log(error);
    }
  };

  if (!questions.length) {
    return (
      <div className="h-screen flex items-center justify-center text-3xl font-bold">
        No Questions Found
      </div>
    );
  }

  const currentQuestion = questions[current];

  const handleSelect = (option) => {
    const currentAnswers = answers[current] || [];

    let updatedAnswers;

    if (currentAnswers.includes(option)) {
      updatedAnswers = currentAnswers.filter(
        (item) => item !== option
      );
    } else {
      updatedAnswers = [
        ...currentAnswers,
        option,
      ];
    }

    setAnswers({
      ...answers,
      [current]: updatedAnswers,
    });
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const previousQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const submitQuiz = () => {
    localStorage.setItem(
      "quizAnswers",
      JSON.stringify(answers)
    );

    localStorage.setItem(
      "quizQuestions",
      JSON.stringify(questions)
    );

    window.location.href = "/result";
  };

  return (
    <div className="min-h-screen bg-[#f5f3ff] p-6">
      {/* Navbar */}
      <div className="bg-white rounded-3xl px-8 py-5 flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-purple-600">
            Quiz Master
          </h1>

          <p className="text-gray-500">
            Test • Learn • Improve
          </p>
        </div>

        

        <div className="flex gap-10 font-medium text-gray-700">
  <button
    onClick={() => (window.location.href = "/")}
  >
    Home
  </button>

  <button
    className="text-purple-600 border-b-2 border-purple-600 pb-1"
    onClick={() => (window.location.href = "/quiz")}
  >
    Quiz
  </button>

  <button
    onClick={() =>
      (window.location.href = "/leaderboard")
    }
  >
    Leaderboard
  </button>

  <button
    onClick={() =>
      (window.location.href = "/categories")
    }
  >
    Categories
  </button>

  <button
    onClick={() =>
      (window.location.href = "/login")
    }
  >
    Login
  </button>

  <button
    onClick={() =>
      (window.location.href = "/register")
    }
  >
    Register
  </button>
</div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
        {/* Quiz Section */}
        <div className="lg:col-span-3 bg-white rounded-3xl p-10 shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-purple-600 font-semibold text-lg">
              {category || "All Categories"}
            </span>

            <button className="text-red-500 font-medium">
              Report
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-gray-500 font-medium">
              Question {current + 1} of{" "}
              {questions.length}
            </h2>

            <h1 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900 leading-tight">
              {currentQuestion.question}
            </h1>

            <p className="text-gray-500 mt-4 text-lg">
              Choose the correct answer
              from the options below.
            </p>
          </div>

          {/* Options */}
          <div className="space-y-5 mt-10">
            {currentQuestion.options.map(
              (option, index) => (
                <OptionCard
                  key={index}
                  option={option}
                  index={index}
                  selected={
                    answers[current]
                  }
                  correctAnswer={
                    currentQuestion.correctAnswer
                  }
                  onClick={() =>
                    handleSelect(option)
                  }
                />
              )
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10">
            <button
              onClick={previousQuestion}
              disabled={current === 0}
              className={`px-8 py-4 rounded-2xl font-semibold ${
                current === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-2 border-purple-500 text-purple-600"
              }`}
            >
              Previous
            </button>

            {current ===
            questions.length - 1 ? (
              <button
                onClick={submitQuiz}
                className="bg-green-600 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-green-700"
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="bg-purple-600 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-purple-700"
              >
                Next
              </button>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <QuizSidebar
  current={current}
  total={questions.length}
  timeLeft={timeLeft}
/>
      </div>
    </div>
  );
}