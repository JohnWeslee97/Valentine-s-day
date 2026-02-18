import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useRef } from "react";

import song from "./assets/song.mp3"

import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import LoveJourney from "./Components/Lovejourney.jsx";
import Valentine from "./Components/Valentine.jsx";
import LoveQuiz from "./Components/LoveQuiz.jsx"; 
import Lastpage from "./Components/Lastpage.jsx";

import "./App.css";

function App() {

  const audioRef = useRef(new Audio(song));

  const playMusic = () => {
    audioRef.current.loop = true;
    audioRef.current.play();
  };

  const stopMusic = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Protected Route
  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/" />;
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Login Page */}
          <Route
            path="/"
            element={<Login onLogin={() => setIsLoggedIn(true)} />}
          />

          {/* Protected Pages */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home playMusic={playMusic}/>
              </ProtectedRoute>
            }
          />

          <Route
            path="/valentine"
            element={
              <ProtectedRoute>
                <Valentine />
              </ProtectedRoute>
            }
          />

          <Route
            path="/journey"
            element={
              <ProtectedRoute>
                <LoveJourney />
              </ProtectedRoute>
            }
          />

          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <LoveQuiz stopMusic={stopMusic}/>
              </ProtectedRoute>
            }
          />
           <Route
            path="/LastPage"
            element={
              <ProtectedRoute>
                <Lastpage stopMusic={stopMusic } playMusic={playMusic}/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
