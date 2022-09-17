import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handlePersonal = this.handlePersonal.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handlePersonal(e) {
        this.props.handlePersonal(e);
    }

    handleAdd(e) {
        this.props.handleAdd(e);
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
                    handleAdd={this.handleAdd}
                />
                <Education
                    education={education}
                    handleAdd={this.handleAdd}
                />
            </div>
        );
    }
}

export default Form