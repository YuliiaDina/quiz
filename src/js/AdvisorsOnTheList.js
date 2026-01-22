import React from "react";

class AdvisorsOnTheList extends React.Component {
  render() {
    return (
      <div>
        <button className="advisorsResDesign">{this.props.advisorName}</button>
        <label className="whWeMatched"> Why we matched </label>
      </div>
    );
  }
}

export default AdvisorsOnTheList;
