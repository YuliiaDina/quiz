import React from "react";
import "../css/App.css";
import Question from "./components/quiz/Question.js";
import Answer from "./components/quiz/Answer.js";
import Button from "./components/Button.js";
import quizData from "../data/quiz.json" with { type: "json" };
import Results from "./Results.js";

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
    return ( /*TODO: перенести наступну частину коду в окремий файл в quiz.js*/
      <div className="App"> 
        {this.state.click < 2 && ( //TODO:  замінити 2 на динамічну змінну(на кількість питань в квізі)
          <div className="quiz-container">
            <Question questionText={quizData.steps[this.state.click].title} />
            {quizData.steps[this.state.click].options.map((option) => (
              <Answer key={option.id} answerText={option.label} />
            ))}
            <Button
              id="nextButton" //TODO:зробити, щоб зникала поки не вибрана одна з варіантів відповідей
              updateClick={this.addClickCount}
              text="Save & Next Question"
            />
          </div>
        )}
        {this.state.click > 0 && (
          <Button
            id="backButton"
            updateClick={this.subClickCount}
            text="Back"
          />
        )}
        {this.state.click === quizData.steps.length && <Results />}
      </div>
    );
  }
}

export default App;
