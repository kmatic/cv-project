import React from "react";
import EducationItem from "./EducationItem";
import styled from 'styled-components';

const Education = ({ education, handleAdd, handleRemove, handleEducation}) => {
    return (
        <Div>
            <Title>Education</Title>
            {education.map((educationItem) => {
                return (
                <EducationItem 
                    educationItem={educationItem}
                    handleRemove={handleRemove}
                    handleEducation={handleEducation}
                />
                )
            })}
            <Button onClick={handleAdd} name='educationItem'>
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

export default Education