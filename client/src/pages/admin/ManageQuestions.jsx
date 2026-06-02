import { useEffect, useState } from "react";

export default function ManageQuestions() {
  const [questions, setQuestions] = useState([]);
  const [editingQuestion, setEditingQuestion] =
    useState(null);

  const [form, setForm] = useState({
    question: "",
    options: "",
    correctAnswer: "",
    category: "",
  });

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/questions"
      );

      const data = await res.json();

      setQuestions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteQuestion = async (id) => {
    try {
      await fetch(
        `http://localhost:5000/api/questions/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchQuestions();
    } catch (error) {
      console.log(error);
    }
  };

  const openEditModal = (question) => {
    setEditingQuestion(question);

    setForm({
      question: question.question,
      options: question.options.join(","),
      correctAnswer: question.correctAnswer,
      category: question.category,
    });
  };

  const updateQuestion = async () => {
    try {
      await fetch(
        `http://localhost:5000/api/questions/${editingQuestion._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: form.question,
            options: form.options.split(","),
            correctAnswer: form.correctAnswer,
            category: form.category,
          }),
        }
      );

      setEditingQuestion(null);

      fetchQuestions();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-5xl font-bold">
              Manage Questions
            </h1>

            <p className="text-gray-500 mt-3">
              Edit and manage quiz questions.
            </p>
          </div>

          <a
            href="/admin/add"
            className="bg-black text-white px-6 py-4 rounded-2xl font-semibold"
          >
            + Add Question
          </a>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-5">
                  Question
                </th>

                <th className="text-left px-6 py-5">
                  Category
                </th>

                <th className="text-left px-6 py-5">
                  Correct Answer
                </th>

                <th className="text-left px-6 py-5">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {questions.map((question) => (
                <tr
                  key={question._id}
                  className="border-b"
                >
                  <td className="px-6 py-5">
                    {question.question}
                  </td>

                  <td className="px-6 py-5">
                    {question.category}
                  </td>

                  <td className="px-6 py-5 text-green-600 font-semibold">
                    {question.correctAnswer}
                  </td>

                  <td className="px-6 py-5 flex gap-3">
                    <button
                      onClick={() =>
                        openEditModal(question)
                      }
                      className="bg-blue-500 text-white px-5 py-2 rounded-xl"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteQuestion(question._id)
                      }
                      className="bg-red-500 text-white px-5 py-2 rounded-xl"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit Modal */}
        {editingQuestion && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white rounded-3xl p-8 w-full max-w-2xl">
              <h1 className="text-3xl font-bold mb-6">
                Edit Question
              </h1>

              <div className="space-y-4">
                <input
                  type="text"
                  value={form.question}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      question: e.target.value,
                    })
                  }
                  className="w-full border p-4 rounded-xl"
                />

                <input
                  type="text"
                  value={form.options}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      options: e.target.value,
                    })
                  }
                  className="w-full border p-4 rounded-xl"
                />

                <input
                  type="text"
                  value={form.correctAnswer}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      correctAnswer: e.target.value,
                    })
                  }
                  className="w-full border p-4 rounded-xl"
                />

                <input
                  type="text"
                  value={form.category}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      category: e.target.value,
                    })
                  }
                  className="w-full border p-4 rounded-xl"
                />
              </div>

              <div className="flex justify-end gap-4 mt-8">
                <button
                  onClick={() =>
                    setEditingQuestion(null)
                  }
                  className="border px-6 py-3 rounded-xl"
                >
                  Cancel
                </button>

                <button
                  onClick={updateQuestion}
                  className="bg-black text-white px-6 py-3 rounded-xl"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}