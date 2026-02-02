import React from "react";
import Question from "./quiz/Question";
import Answer from "./quiz/Answer";
import Button from "./Button";
import quizData from "../../data/quiz.json" with { type: "json" };

class QuizComponent extends React.Component {
  render() {
    return (
      <div className="quiz-container">
        <Question questionText={quizData.steps[this.props.currentStep].title} />
        {quizData.steps[this.props.currentStep].options.map((option) => (
          <Answer
            id={option.id}
            answerText={option.label}
            handleOptionSelect ={this.props.setUsAns}
          />
        ))}

        {this.props.answers[this.props.currentStep] != null  && (
        <Button
          id="nextButton" //TODO:зробити, щоб зникала поки не вибрана одна з варіантів відповідей
          updateClick={this.props.addClick}
          text="Save & Next Question"
        />)}
      </div>
    );
  }
}

export default QuizComponent;
