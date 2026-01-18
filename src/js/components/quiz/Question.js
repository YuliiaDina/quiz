import React from "react";

class Question extends React.Component{
    render(){
        return(
            <div className = "Question1-Design">
                {this.props.questionText}
            </div>
        )
    }
}

export default Question;