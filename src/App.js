// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import { QuizData } from "./components/QuizData";
import QuizeResult from "./components/QuizeResult";

function Quiz() {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickopetion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();

    if (currentQuestion < QuizData.length - 1) {
      setcurrentQuestion(currentQuestion + 1);
      setClickopetion(0);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };
  const resetAll=()=>{
    setShowResult(false);
    setcurrentQuestion(0);
    setClickopetion(0);
    setScore(0);
  }

  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
        {showResult ? (
          <QuizeResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}.</span>
              <span id="question-txt">{QuizData[currentQuestion].options}</span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((options, i) => {
                return (
                  <button
                    // className='option-btn'
                    className={`option-btn ${
                      clickedOption == i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setClickopetion(i + 1)}
                  >
                    {options}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
}
export default Quiz;