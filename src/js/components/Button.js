import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button id={this.props.id} onClick={this.props.updateClick}>
        {" "}
        {this.props.text}{" "}
      </button>
    );
  }
}

export default Button;
