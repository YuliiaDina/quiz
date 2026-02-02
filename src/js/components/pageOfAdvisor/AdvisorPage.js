import React from "react";
import iconAdvisor from "../../../user-profile-icon-flat-style-member-avatar-vector.png";

class AdvisorPage extends React.Component {
  render() {
    const adv = this.props.advisor;
    return (
      <div className="advisorPageHeader">
        <div className="headerTopRow">
          <img src={iconAdvisor} alt="IconAdvisor" className="iconAdvisor" />
          <h1 className="advisorPageName">{adv.name}</h1>
        </div>
        <div className="advisorDetails">
          <p>
            <strong>Title:</strong> {adv.title}
          </p>
          <p>
            <strong>Location:</strong>
            {adv.location}
          </p>
          <p>
            <strong>Service Model:</strong> {adv.serviceModel}
          </p>
        </div>
        <div className="advisorBio">
          <h3>
            <strong>Bio:</strong>
          </h3>
          <p> {adv.bio} </p>
        </div>
        <button className="WriteMessage"> Message Advisor </button>
      </div>
    );
  }
}

export default AdvisorPage;
