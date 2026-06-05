export default function QuizSidebar({
  current,
  total,
  timeLeft,
}) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">
            Quiz Progress
          </h1>

          <span className="text-purple-600 font-bold">
            {Math.round(progress)}%
          </span>
        </div>

        <div className="w-full bg-purple-100 rounded-full h-4 mt-5">
          <div
            className="bg-purple-600 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-gray-500 mt-4">
          {current + 1} of {total} questions answered
        </p>
      </div>

      {/* Timer */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <h1 className="font-bold text-xl">
          Time Left
        </h1>

        <div className="text-6xl font-bold text-purple-600">
  {Math.floor(timeLeft / 60)}:
  {(timeLeft % 60).toString().padStart(2, "0")}
</div>
      </div>

      {/* Navigator */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <h1 className="font-bold text-xl mb-5">
          Question Navigator
        </h1>

        <div className="grid grid-cols-5 gap-3">
          {Array.from({ length: total }).map((_, index) => (
            <div
              key={index}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold
              ${
                index === current
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}