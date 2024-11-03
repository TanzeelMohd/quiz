import React, { useState } from 'react';

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is 5 + 7?",
    options: ["10", "11", "12", "13"],
    answer: "12",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Jupiter",
  },
];

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResult(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        {showResult ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Your Score: {score} / {quizData.length}</h2>
            <button
              onClick={resetQuiz}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
            >
              Retry Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-6">
              Question {currentQuestionIndex + 1} of {quizData.length}
            </h2>
            <h3 className="text-lg font-medium mb-4">{quizData[currentQuestionIndex].question}</h3>
            <div className="flex flex-col space-y-3">
              {quizData[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option)}
                  className="bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 focus:outline-none"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
