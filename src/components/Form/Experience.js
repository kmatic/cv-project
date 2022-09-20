import React from "react";
import ExperienceItem from "./ExperienceItem";
import styled from 'styled-components';


class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleExperience = this.handleExperience.bind(this);
    }

    handleAdd(e) {
        this.props.handleAdd(e);
    }

    handleRemove(e, id) {
        this.props.handleRemove(e, id);
    }

    handleExperience(e, id) {
        this.props.handleExperience(e, id);
    }

    render() {
        const { experiences } = this.props;
        return (
            <Div>
                <Title>Work Experience</Title>
                    {experiences.map((experience) => {
                        return (
                        <ExperienceItem
                            experience={experience}
                            handleRemove={this.handleRemove}
                            handleExperience={this.handleExperience}
                        />
                        )
                    })}
                <Button onClick={this.handleAdd} name='experienceItem'>
                    Add
                </Button>
            </Div>
        );
    }
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Button = styled.button`
    padding: 8px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
`;

const Title = styled.h2`
    text-align: left;
    margin-bottom: 0;
`;

export default Experience