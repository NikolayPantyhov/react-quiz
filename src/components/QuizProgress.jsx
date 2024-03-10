import Store from "../store/index.js";

function QuizProgress({currentWidth}) {
  return (
    <div style={currentWidth}
         className="quiz__progress-inner"></div>
  )
}

export default QuizProgress