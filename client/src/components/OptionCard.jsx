export default function OptionCard({
  option,
  index,
  selected,
  onClick,
}) {
  const letters = ["A", "B", "C", "D"];

  const isSelected =
  selected?.includes(option);

  return (
    <button
      onClick={onClick}
      className={`w-full border-2 rounded-2xl p-5 flex items-center gap-5 transition-all duration-300
      ${
        isSelected
          ? "border-purple-600 bg-purple-50"
          : "border-gray-200 bg-white hover:border-purple-400"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold
        ${
          isSelected
            ? "bg-purple-600 text-white"
            : "bg-purple-100 text-purple-700"
        }`}
      >
        {letters[index]}
      </div>

      <h1 className="text-xl font-medium text-gray-800">
        {option}
      </h1>
    </button>
  );
}