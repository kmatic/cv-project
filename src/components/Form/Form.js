import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";
import styled from 'styled-components';

const Form = ({
    handlePersonal,
    handleAdd,
    handleRemove,
    handleEducation,
    handleExperience,
    personal,
    experiences,
    education
}) => {
    return (
        <Div>
            <Personal 
                personal={personal}
                handlePersonal={handlePersonal}
            />
            <Experience
                experiences={experiences}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
                handleExperience={handleExperience}
            />
            <Education
                education={education}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
                handleEducation={handleEducation}
            />
        </Div>
    );
}

const Div = styled.div`
    padding: 25px;
    width: 850px;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export default Form