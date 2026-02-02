import React from "react";
import advisorPhoto from "../../../user-profile-icon-flat-style-member-avatar-vector.png";

class AdvisorsOnTheList extends React.Component {
  render() {
    let match;
    if (this.props.currAdvisor.specialties.includes(this.props.ans[0])){
      match = "Specializes in Retirement planning"
    }
    else {
      match = "Offers Ongoing financial guidance"
    }

    return (
      <button
        className="advisorsResDesign"
        onClick={() => {
          this.props.setAdvisor(this.props.currAdvisor);
          this.props.addClick();
        }}
      >
        <div className="advisorHeader">
          <img src={advisorPhoto} alt="Advisor" className="advisorImg" />
          <span className="advisorName">{this.props.advisorName}</span>
        </div>
        <label className="whWeMatched"> Why we matched: {match} </label>
      </button>
    );
  }
}

export default AdvisorsOnTheList;
