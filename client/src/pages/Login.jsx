import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // We'll connect backend next
    console.log(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f3ff]">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-xl mb-4"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-xl mb-4"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-xl"
        >
          Login
        </button>
      </form>
    </div>
  );
}