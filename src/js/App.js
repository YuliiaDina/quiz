import React from "react";
import { Routes, Route } from 'react-router-dom';
import "../css/App.css";
import QuizComponent from "./components/QuizComponent.js";
import Button from "./components/Button.js";
import { quiz } from "../ts/quiz.ts";
import Results from "./components/resultsOfQuiz/Results.js";
import AdvisorPage from "./components/pageOfAdvisor/AdvisorPage.js"
import { Router } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      userAnswers: new Array(quiz.steps.length).fill(null),
      advisor:null,
    };
  }

  addClickCount = () => {
    this.setState((prevState) => ({ currentStep: prevState.currentStep + 1 }));
  };
  subStepCount = () => {
    this.setState((prevState) => ({ currentStep: prevState.currentStep - 1 }));
  };


  setUserAnswer = (value) => {
    const { currentStep, userAnswers } = this.state;
    const newAnswers = [...userAnswers];
    newAnswers[currentStep] = value;
    this.setState({ userAnswers:newAnswers });
  };

  setAdvisor = (value)=>{
    this.setState(({ advisor: value}))
  }

  render() {
    return (
      <div className="App"> 
      <Routes> 
        {this.state.currentStep < quiz.steps.length && (
          
          <Route path="/" element= {<QuizComponent
            addClick={this.addClickCount}
            currentStep={this.state.currentStep}
            answers = {this.state.userAnswers}
            setUsAns = {this.setUserAnswer}
          />}/>
        )}
        <Route path="/" element= 
        {this.state.currentStep === quiz.steps.length &&( 
          <Results 
            addClick={this.addClickCount}
            ans = {this.state.userAnswers}
            setAdv = {this.setAdvisor}
            
          />
          )}/>
          
          </Routes>
          {this.state.currentStep > 0 && (
          <Button
            id="backButton"
            updateClick={this.subStepCount}
            text="Back"
          />
        )}
        {this.state.currentStep === quiz.steps.length+1 &&( 
          <AdvisorPage
            advisor = {this.state.advisor}
          />
          )}
      </div>
    );
  }
}

export default App;
