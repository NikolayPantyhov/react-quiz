import Store from "../store/index.js";

function QuizResult({result, show}) {
  return (
    <h3 className="quiz__summary">
      Ви відповіли правильно на {result} із {show}  запитаннь
    </h3>
  )
}

export default QuizResult