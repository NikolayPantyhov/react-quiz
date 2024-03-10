import {useState} from "react";
import Store from "../store";
import QuizItem from "./QuizItem.jsx";
import QuizProgress from "./QuizProgress.jsx";
import QuizResult from "./QuizResult.jsx";
import quizResult from "./QuizResult.jsx";

function App() {
  let [results, setResults] = useState(0)
  let [currentQuestion, setCurrentQuestion] = useState(0)
  const selectAnswer = (id) => {
    Store.quiz.questions[currentQuestion].correct === id ? setResults(results + 1) : null
    if (currentQuestion < Store.quiz.questions.length) setCurrentQuestion(currentQuestion + 1)
  }

  return (
    <main className="quiz">
      {
        currentQuestion < Store.quiz.questions.length &&
        <>
          <h1 className="quiz__title">
            {Store.quiz.title}
          </h1>
          <div className="quiz__progress">
            <QuizProgress currentWidth={{width: currentQuestion / Store.quiz.questions.length * 100 + '%'}}/>
          </div>

          <section className="quiz__wrap">
            <QuizItem current={currentQuestion} chooseAnswer={selectAnswer}/>
          </section>
        </>
      }


      <section className={`quiz__result ${currentQuestion >= Store.quiz.questions.length ? '--show' : ''}`}>
        <QuizResult result={results} show={Store.quiz.questions.length}/>
      </section>
    </main>
  )
}

export default App
