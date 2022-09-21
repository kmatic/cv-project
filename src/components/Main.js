import React, { useState } from "react";
import Form from "./Form/Form";
import Preview from "./Preview/Preview";
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const Main = () => {
    const fields = {
        personal: {
            name: '',
            title: '',
            phone: '',
            email: '',
            website: '',
            location: '',
        },
        experienceItem: {
            id: uuidv4(),
            position: '',
            company: '',
            location: '',
            start: '',
            end: '',
            desc: '',
        },
        educationItem: {
            id: uuidv4(),
            program: '',
            university: '',
            start: '',
            end: '',
        },
        experiences: [],
        education: [],
    }

    const [data, setData] = useState(fields);

    const handlePersonal = (e) => {
        setData((prevState) => ({
            ...prevState,
            personal: {
                ...prevState.personal,
                [e.target.name]: e.target.value,
            },
        }));
    }

    const handleExperience = (e, id) => {
        let updatedExperiences = data.experiences.map(experience => {
            if (experience.id === id) {
                return {...experience, [e.target.name]: e.target.value};
            }
            return experience;
        });

        setData((prevState) => {
            return {...prevState, experiences: updatedExperiences };
        });
    }

    const handleEducation = (e, id) => {
        let updatedEducation = data.education.map(educationItem => {
            if (educationItem.id === id) {
                return {...educationItem, [e.target.name]: e.target.value};
            }
            return educationItem;
        });

        setData((prevState) => ({
            ...prevState,
            education: updatedEducation,
        }));
    }

    const handleAdd = (e) => {
        e.preventDefault();
        setData((prevState) => {
            if (e.target.name === 'experienceItem') {
                return {
                    ...prevState,
                    experienceItem: {
                        id: uuidv4(),
                        position: '',
                        company: '',
                        location: '',
                        start: '',
                        end: '',
                        desc: '',
                    },
                    experiences: [...prevState.experiences, prevState.experienceItem]
                };
            } else if (e.target.name === 'educationItem') {
                return {
                    ...prevState,
                    educationItem: {
                        id: uuidv4(),
                        program: '',
                        university: '',
                        start: '',
                        end: '',
                    },
                    education: [...prevState.education, prevState.educationItem]
                };
            }
        });
    }

    const handleRemove = (e, id) => {
        e.preventDefault();
        setData((prevState) => {
            if (e.target.name === 'expDel') {
                return {
                    ...prevState,
                    experiences: prevState.experiences.filter(experience => experience.id !== id),
                };
            } else if (e.target.name === 'eduDel') {
                return {
                    ...prevState,
                    education: prevState.education.filter(educationItem => educationItem.id !== id),
                };
            }
        });
    }

    const { personal, experiences, education } = data;
    
    return (
        <Div>
            <Form 
                personal={personal}
                experiences={experiences}
                education={education}
                handlePersonal={handlePersonal}
                handleExperience={handleExperience}
                handleEducation={handleEducation}
                handleAdd={handleAdd}
                handleRemove={handleRemove}

            />
            <Preview
                personal={personal}
                experiences={experiences}
                education={education}
            />
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    margin: 30px;
    gap: 25px;

    @media (max-width: 1600px) {
        flex-direction: column;
        align-items: center;
    }
`;

export default Main