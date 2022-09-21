import React from "react";
import styled from 'styled-components';

const Experience = ({ experiences }) => {
    return (
        <Div>
            <h1>WORK EXPERIENCE</h1>
            <ExperiencesWrapper>
                {experiences.map((experience) => {
                        return (
                            <ExperienceWrapper>
                                <WorkHeader>
                                    <p><span>{experience.company}</span></p>
                                    <p>{experience.position}</p>
                                </WorkHeader>
                                <DateLocation>
                                    <p>{experience.start} &#8211; {experience.end} | {experience.location}</p>
                                </DateLocation>
                                <p>{experience.desc}</p>
                            </ExperienceWrapper>
                        );
                })}
            </ExperiencesWrapper>
        </Div>
    );
}

const WorkHeader = styled.div`
    display: flex;
    gap: 12px;

    > p {
        margin: 0;
    }

    > p > span { 
        font-weight: bold;
    }
`;

const DateLocation = styled.div`
    font-size: 0.8rem;
    color: gray;

    > p {
        margin: 0;
    }
`;

const ExperienceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    > p {
        margin: 0;
        white-space: pre-wrap;
    }
`;

const ExperiencesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Div = styled.div`
    > h1 {
        font-size: 1.2rem;
        margin-top: 25px;
    }
`;

export default Experience