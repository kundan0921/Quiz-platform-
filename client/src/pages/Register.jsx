import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Success message
    setSuccess("✅ Registration Successful!");

    // Clear form
    setName("");
    setEmail("");
    setPassword("");

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f3ff] px-4">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-xl mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-xl mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-xl mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Register
          </button>

          {success && (
            <div className="mt-4 bg-green-100 text-green-700 p-3 rounded-xl text-center font-medium">
              {success}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}