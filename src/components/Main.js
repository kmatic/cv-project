import React from "react";
import Form from "./Form/Form";
import Preview from "./Preview/Preview";
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
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

    this.handlePersonal = this.handlePersonal.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleExperience = this.handleExperience.bind(this);
    this.handleEducation = this.handleEducation.bind(this);
    }

    handlePersonal(e) {
        this.setState({
            personal: {
                ...this.state.personal,
                [e.target.name]: e.target.value,
            }
        });
    }

    handleExperience(e, id) {
        let updatedExperiences = this.state.experiences.map(experience => {
            if (experience.id === id) {
                return {...experience, [e.target.name]: e.target.value};
            }
            return experience;
        });

        this.setState({
            experiences: updatedExperiences,
        })
    }

    handleEducation(e, id) {
        let updatedEducation = this.state.education.map(educationItem => {
            if (educationItem.id === id) {
                return {...educationItem, [e.target.name]: e.target.value};
            }
            return educationItem;
        });

        this.setState({
            education: updatedEducation,
        })
    }

    handleAdd(e) {
        e.preventDefault();
        if (e.target.name === 'experienceItem') {
            this.setState({
                experienceItem: {
                    id: uuidv4(),
                    position: '',
                    company: '',
                    location: '',
                    start: '',
                    end: '',
                    desc: '',
                },
                experiences: [...this.state.experiences, this.state.experienceItem],
            });
        } else if (e.target.name === 'educationItem') {
            this.setState({
                educationItem: {
                    id: uuidv4(),
                    program: '',
                    university: '',
                    start: '',
                    end: '',
                },
                education: [...this.state.education, this.state.educationItem],
            });
        }
    }

    handleRemove(e, id) {
        e.preventDefault();
        if (e.target.name === 'expDel') {
            this.setState({
                experiences: this.state.experiences.filter(experience => experience.id !== id),
            });
        } else if (e.target.name === 'eduDel') {
            this.setState({
                education: this.state.education.filter(educationItem => educationItem.id !== id),
            })
        }
    }

    render() {
        const { personal, experiences, education } = this.state
        return (
            <Div>
                <Form 
                    personal={personal}
                    experiences={experiences}
                    education={education}
                    handlePersonal={this.handlePersonal}
                    handleExperience={this.handleExperience}
                    handleEducation={this.handleEducation}
                    handleAdd={this.handleAdd}
                    handleRemove={this.handleRemove}

                />
                <Preview
                    personal={personal}
                    experiences={experiences}
                    education={education}
                />
            </Div>
        );
    }
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