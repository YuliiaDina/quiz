import React from "react";
import "../css/App.css";
import Question from "./components/quiz/Question.js";
import Answer from "./components/quiz/Answer.js";
import Button from "./components/Button.js";
import quizData from "../data/quiz.json" with { type: "json" };


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
    };
  }
  addClickCount = () => {
    this.setState((prevState) => ({ click: prevState.click + 1 }));
  };
  subClickCount = () => {
    this.setState((prevState) => ({ click: prevState.click - 1 }));
  };

  render() {
    return (
      <div className="App">
        {this.state.click < 2 &&(
            <div className="quiz-container">    
        <Question questionText={quizData.steps[this.state.click].title} />
        {quizData.steps[this.state.click].options.map((item) => (
          <Answer key={item.id} answerText={item.label} />
        ))}
        <Button
          id="nextButton"
          updateClick={this.addClickCount}
          text="Save & Next Question"
        /> 
        </div>)}
        {this.state.click > 0 &&(
          <Button
            id="backButton"
            updateClick={this.subClickCount}
            text="Back"  
        /> )}    
      </div>
    );
  }
}

export default App;
