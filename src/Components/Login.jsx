import { useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ Import this
import "../css/Login.css";
import bunny from "../assets/bunny.gif";


export default function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();   // ✅ Hook for navigation

  const handleLogin = () => {
    const allowedUsers = ["jemi", "john"];
    const correctPassword = "jemimajohnweslee@143";

    if (
      allowedUsers.includes(name.toLowerCase()) &&
      password === correctPassword
    ) {
      setError("");
      onLogin();          // set isLoggedIn true
      navigate("/home");  // ✅ Go to home page
    } else {
      setError("Wrong details 😢 Try again");
    }
  };

  return (
    <div className="logindev">
      <h1 className="heading">Forever start's Here !</h1>

      <img src={bunny} alt="bunny" className="bunnyimg" />
     

      <div className="login">
        <h2>Login 😎</h2>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          placeholder="Secret Password ❤️"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Enter My Heart 🤍
        </button>

        {error && <p className="error">{error}</p>}
      </div>
       <p className="footer">Made with love by me 🤍</p>
    </div>
  );
}
