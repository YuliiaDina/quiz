import React from "react";
import { choosingAdvisor } from "../../../matching/score.ts";
import AdvisorsOnTheList from "./AdvisorsOnTheList.js";


class Results extends React.Component {
  render() {
    const advisors = choosingAdvisor(this.props.ans);
    return (
      <div className="advisorCard ">
        {advisors.map((advisor) => (
          <AdvisorsOnTheList
            key={advisor.id}
            advisorName={advisor.name}
            addClick={this.props.addClick}
            setAdvisor ={this.props.setAdv}
            currAdvisor = {advisor}
            ans = {this.props.ans}
          />
        ))}
      </div>
    );
  }
}

export default Results;
