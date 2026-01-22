import React from "react";

class Answer extends React.Component {
  render() {
    return (
      <div className="Answer1-Design">
        <span> {this.props.answerText} </span>
        <input type="radio" name="ans"></input>
      </div>
    );
  }
}

export default Answer;
