import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";
import styled from 'styled-components';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handlePersonal = this.handlePersonal.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleExperience = this.handleExperience.bind(this);
        this.handleEducation = this.handleEducation.bind(this);
    }

    handlePersonal(e) {
        this.props.handlePersonal(e);
    }

    handleExperience(e, id) {
        this.props.handleExperience(e, id);
    }

    handleEducation(e, id) {
        this.props.handleEducation(e, id);
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
            <Div>
                <Personal 
                    personal={personal}
                    handlePersonal={this.handlePersonal}
                />
                <Experience
                    experiences={experiences}
                    handleAdd={this.handleAdd}
                    handleRemove={this.handleRemove}
                    handleExperience={this.handleExperience}
                />
                <Education
                    education={education}
                    handleAdd={this.handleAdd}
                    handleRemove={this.handleRemove}
                    handleEducation={this.handleEducation}
                />
            </Div>
        );
    }
}

const Div = styled.div`
    padding: 25px;
    width: 850px;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export default Form