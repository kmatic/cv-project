import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handlePersonal = this.handlePersonal.bind(this);
    }

    handlePersonal(e) {
        this.props.handlePersonal(e);
    }

    render() {
        const { personal, experiences, education } = this.props

        return (
            <div>
                <Personal 
                    personal={personal}
                    handlePersonal={this.handlePersonal}
                />
                <Experience
                    experiences={experiences}
                />
                <Education
                    education={education}
                />
            </div>
        );
    }
}

export default Form