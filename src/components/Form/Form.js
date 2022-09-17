import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handlePersonal = this.handlePersonal.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handlePersonal(e) {
        this.props.handlePersonal(e);
    }

    handleAdd(e) {
        this.props.handleAdd(e);
    }

    handleRemove(e, id) {
        this.props.handleRemove(e, id);
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
                    handleRemove={this.handleRemove}
                />
                <Education
                    education={education}
                    handleAdd={this.handleAdd}
                    handleRemove={this.handleRemove}
                />
            </div>
        );
    }
}

export default Form