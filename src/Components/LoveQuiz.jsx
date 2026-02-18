/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../css/Lovequis.css";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: " when our love start.? 💞",
    options: ["school", "januery", "july", "september"],
    answer: 2,
  },
  {
    question: "Who loves more..? 💘",
    options: ["You", "Me", "Both equally", "dont know"],
    answer: 2,
  },
  {
    question: "What makes our love special? ✨",
    options: ["Trust", "Care", "Understanding", "All of the above"],
    answer: 3,
  },
  {
    question: "Our first kiss 😘",
    options: ["jan 7", " dec 15", " jan 17 ", "dont know"],
    answer: 1,
  },
  {
    question: "Who is my Chella Kutti? 😍",
    options: ["Someone else", "me obviously!", "Secret 🤫", "No idea"],
    answer: 1,
  },
];

const LoveQuiz = ({stopmusic}) => {

  const navigate = useNavigate()

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleAnswer = (index) => {
    setSelected(index);

    setTimeout(() => {
      if (index === questions[current].answer) {
        setScore((prev) => prev + 1);
      }

      const next = current + 1;
      if (next < questions.length) {
        setCurrent(next);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 300);
  };

  // ✅ Back Button Logic
  const handleBack = () => {
    if (finished) {
      // If on result screen → reset quiz
      setFinished(false);
      setCurrent(0);
      setScore(0);
      setSelected(null);
    } else if (current > 0) {
      // Go to previous question
      setCurrent((prev) => prev - 1);
      setSelected(null);
    } else {
      // If first question → go browser back
      window.history.back();
    }
  };

  return (
    <div className="backgr">
      <h2 className="heading">💖 Our Love Quiz 💖</h2>
    <div className="quiz-wrapper">
      <div className="quiz-card">

      

       

        {!finished ? (
          <>
            <h3 className="questions">{questions[current].question}</h3>

            <div className="options">
              {questions[current].options.map((opt, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`option-btn ${
                    selected === index ? "selected" : ""
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <p className="progress">
              Question {current + 1} / {questions.length}
            </p>
             {/* ✅ Back Button */}
        <button onClick={handleBack} style={{ marginBottom: "15px" }}>
          ⬅ Back
        </button>
          </>
        ) : (
          <div className="result-section">
            <h2>Your Score: {score} / 5 💕</h2>

            {score >= 3 ? (
              <>
                <h3> Congratulations My Love! </h3>
                <p className="poem">
                  I know you will win this game<br />
                  Because you already won my heart right...?<br />
                  
                </p>

                <h2>Get Your Gift</h2>

                <button onClick={()=>{navigate("/Lastpage")}} > End </button>
                
                
              </>
              
            ) : ( <>
              <p>Try again  😜💘</p>
              <button className="backbutton">Back</button>
              </>
            )}
          </div>
        )}
      </div>
    </div></div>
  );
};

export default LoveQuiz;
