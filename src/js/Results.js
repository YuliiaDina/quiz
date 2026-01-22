import React from "react";
import advisorData from "../data/advisors.json" with { type: "json" };
import AdvisorsOnTheList from "./AdvisorsOnTheList.js";

class Results extends React.Component {
  render() {
    return (
      <div>
        {advisorData.map((advisor) => (
          <AdvisorsOnTheList key={advisor.id} advisorName={advisor.name} />
        ))}
      </div>
    );
  }
}

export default Results;
