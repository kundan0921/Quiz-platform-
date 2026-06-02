export default function ServiceNowStyleQuizUI() {
  const stats = [
    { title: "Total Quizzes", value: "24" },
    { title: "Questions", value: "320" },
    { title: "Students", value: "1,240" },
    { title: "Completion Rate", value: "92%" },
  ];

  const recentQuizzes = [
    {
      title: "Frontend Development Quiz",
      category: "Technology",
      questions: 20,
      status: "Active",
    },
    {
      title: "Finance Basics Test",
      category: "Finance",
      questions: 15,
      status: "Draft",
    },
    {
      title: "JavaScript Advanced",
      category: "Programming",
      questions: 30,
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-[#111827] text-white p-6 hidden md:flex flex-col">
        <h1 className="text-3xl font-bold mb-10">Quiz Admin</h1>

        <nav className="space-y-3">
          <button className="w-full text-left px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
            Dashboard
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
            Add Questions
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
            Manage Quizzes
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
            Results
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
            Analytics
          </button>
        </nav>

        <div className="mt-auto bg-white/10 rounded-2xl p-4">
          <p className="text-sm text-gray-300">Logged in as</p>
          <h2 className="font-semibold mt-1">Admin User</h2>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Dashboard
            </h1>
            <p className="text-gray-500 mt-2">
              Manage quizzes, questions and student performance.
            </p>
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-2xl hover:opacity-90 transition shadow-lg">
            + Create Quiz
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200"
            >
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h2 className="text-4xl font-bold mt-3 text-gray-900">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">
              Recent Quizzes
            </h2>

            <input
              type="text"
              placeholder="Search quiz..."
              className="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wide">
                <tr>
                  <th className="px-6 py-4">Quiz</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Questions</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {recentQuizzes.map((quiz, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-5 font-medium text-gray-900">
                      {quiz.title}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {quiz.category}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {quiz.questions}
                    </td>

                    <td className="px-6 py-5">
                      <span className="px-3 py-1 rounded-full text-sm bg-gray-900 text-white">
                        {quiz.status}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <button className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90 transition">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
