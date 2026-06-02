import { useState } from "react";

export default function AddQuestion() {
  const [form, setForm] = useState({
    question: "",
    options: "",
    correctAnswer: "",
    category: "",
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/questions",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            question: form.question,
            options: form.options
              .split(",")
              .map((item) =>
                item.trim()
              ),

            correctAnswer:
              form.correctAnswer
                .split(",")
                .map((item) =>
                  item.trim()
                ),

            category: form.category,
          }),
        }
      );

      if (response.ok) {
        // Success Message
        setSuccess(true);

        // Clear Form
        setForm({
          question: "",
          options: "",
          correctAnswer: "",
          category: "",
        });

        // Hide Message
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Success Alert */}
        {success && (
          <div className="bg-green-100 border border-green-300 text-green-700 px-6 py-4 rounded-2xl mb-6 text-lg font-semibold shadow-sm">
            ✅ Question Added Successfully
          </div>
        )}

        {/* Main Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-2xl rounded-[40px] p-10">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-5xl font-bold text-gray-900">
              Add New Question
            </h1>

            <p className="text-gray-500 mt-4 text-lg">
              Create professional quiz
              questions for your exam
              platform.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Question */}
            <div>
              <label className="block text-lg font-semibold mb-3 text-gray-700">
                Question
              </label>

              <textarea
                rows="4"
                value={form.question}
                onChange={(e) =>
                  setForm({
                    ...form,
                    question:
                      e.target.value,
                  })
                }
                placeholder="Enter your question..."
                className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-lg outline-none focus:ring-4 focus:ring-purple-200"
                required
              />
            </div>

            {/* Options */}
            <div>
              <label className="block text-lg font-semibold mb-3 text-gray-700">
                Options
              </label>

              <input
                type="text"
                value={form.options}
                onChange={(e) =>
                  setForm({
                    ...form,
                    options:
                      e.target.value,
                  })
                }
                placeholder="Option1, Option2, Option3"
                className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-lg outline-none focus:ring-4 focus:ring-purple-200"
                required
              />

              <p className="text-sm text-gray-500 mt-3">
                Separate options using
                commas
              </p>
            </div>

            {/* Correct Answers */}
            <div>
              <label className="block text-lg font-semibold mb-3 text-gray-700">
                Correct Answers
              </label>

              <input
                type="text"
                value={form.correctAnswer}
                onChange={(e) =>
                  setForm({
                    ...form,
                    correctAnswer:
                      e.target.value,
                  })
                }
                placeholder="Correct Answer1, Correct Answer2"
                className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-lg outline-none focus:ring-4 focus:ring-purple-200"
                required
              />

              <p className="text-sm text-gray-500 mt-3">
                Multiple answers allowed
              </p>
            </div>

            {/* Category */}
            <div>
              <label className="block text-lg font-semibold mb-3 text-gray-700">
                Category
              </label>

              <input
                type="text"
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category:
                      e.target.value,
                  })
                }
                placeholder="Frontend, Backend, React..."
                className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-lg outline-none focus:ring-4 focus:ring-purple-200"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center pt-6">
              <a
                href="/admin/manage"
                className="border border-gray-300 px-8 py-4 rounded-2xl font-semibold text-gray-700 hover:bg-gray-100 transition"
              >
                ← Back
              </a>

              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:scale-105 transition"
              >
                Add Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}