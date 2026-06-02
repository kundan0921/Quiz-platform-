export default function Result() {
  const questions =
    JSON.parse(
      localStorage.getItem("quizQuestions")
    ) || [];

  const answers =
    JSON.parse(
      localStorage.getItem("quizAnswers")
    ) || {};

  let score = 0;

  // Normalize answers safely
  const normalizeArray = (data) => {
    if (!data) return [];

    if (Array.isArray(data)) {
      return data.map((item) =>
        item.trim()
      );
    }

    return [data.trim()];
  };

  // Compare answers
  const checkCorrect = (
    userAnswers,
    correctAnswers
  ) => {
    const user = normalizeArray(
      userAnswers
    ).sort();

    const correct = normalizeArray(
      correctAnswers
    ).sort();

    return (
      JSON.stringify(user) ===
      JSON.stringify(correct)
    );
  };

  // Calculate score
  questions.forEach((q, index) => {
    const isCorrect = checkCorrect(
      answers[index],
      q.correctAnswer
    );

    if (isCorrect) {
      score++;
    }
  });

  return (
    <div className="min-h-screen bg-[#f5f3ff] p-10">
      <div className="max-w-5xl mx-auto">
        {/* Result Card */}
        <div className="bg-white rounded-3xl p-10 shadow-sm text-center">
          <h1 className="text-6xl font-bold text-purple-700">
            Quiz Result
          </h1>

          <h2 className="text-4xl font-semibold mt-6">
            Score: {score} / {questions.length}
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Review your answers below
          </p>
        </div>

        {/* Questions Review */}
        <div className="space-y-8 mt-10">
          {questions.map((q, index) => {
            const userAnswers =
              normalizeArray(
                answers[index]
              );

            const correctAnswers =
              normalizeArray(
                q.correctAnswer
              );

            const isCorrect =
              checkCorrect(
                userAnswers,
                correctAnswers
              );

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm"
              >
                {/* Question */}
                <h1 className="text-3xl font-bold text-gray-900">
                  Q{index + 1}. {q.question}
                </h1>

                {/* User Answer */}
                <div className="mt-8">
                  <p className="text-xl font-medium">
                    Your Answer:
                  </p>

                  <div className="flex flex-wrap gap-3 mt-3">
                    {userAnswers.length > 0 ? (
                      userAnswers.map(
                        (answer, i) => (
                          <span
                            key={i}
                            className={`px-5 py-2 rounded-full text-lg font-semibold
                            ${
                              isCorrect
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {answer}
                          </span>
                        )
                      )
                    ) : (
                      <span className="text-red-500 font-semibold">
                        Not Answered
                      </span>
                    )}
                  </div>
                </div>

                {/* Correct Answer */}
                <div className="mt-8">
                  <p className="text-xl font-medium">
                    Correct Answer:
                  </p>

                  <div className="flex flex-wrap gap-3 mt-3">
                    {correctAnswers.map(
                      (answer, i) => (
                        <span
                          key={i}
                          className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-lg font-semibold"
                        >
                          {answer}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Status */}
                <div className="mt-8">
                  {isCorrect ? (
                    <div className="bg-green-100 text-green-700 px-6 py-3 rounded-2xl inline-block font-bold text-lg">
                      Correct
                    </div>
                  ) : (
                    <div className="bg-red-100 text-red-700 px-6 py-3 rounded-2xl inline-block font-bold text-lg">
                      Wrong
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Restart Button */}
        <div className="text-center mt-12">
          <a
            href="/quiz"
            className="bg-purple-600 text-white px-10 py-5 rounded-2xl text-xl font-semibold inline-block"
          >
            Try Again
          </a>
        </div>
      </div>
    </div>
  );
}