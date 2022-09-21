import React from "react";
import ExperienceItem from "./ExperienceItem";
import styled from 'styled-components';

const Experience = ({ experiences, handleAdd, handleRemove, handleExperience }) => {
    return (
        <Div>
            <Title>Work Experience</Title>
            {experiences.map((experience) => {
                return (
                <ExperienceItem
                    experience={experience}
                    handleRemove={handleRemove}
                    handleExperience={handleExperience}
                />
                )
            })}
            <Button onClick={handleAdd} name='experienceItem'>
                Add
            </Button>
        </Div>
    );
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