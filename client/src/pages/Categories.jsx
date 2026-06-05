import { Link } from "react-router-dom";

const categories = [
  "CIS-DF 1",
  "CIS-DF 2",
  "CIS-DF 3",
  "Actual Exam questions CSDM",
  "Coming Soon...",
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold">
        Categories
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/quiz/${category}`}
            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold">
              {category}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}