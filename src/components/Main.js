import React from "react";
import Form from "./Form/Form";
import Preview from "./Preview/Preview";
import { v4 as uuidv4 } from 'uuid';

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
    }

    handlePersonal(e) {
        this.setState({
            personal: {
                ...this.state.personal,
                [e.target.name]: e.target.value,
            }
        });
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
            <div>
                <Form 
                    personal={personal}
                    experiences={experiences}
                    education={education}
                    handlePersonal={this.handlePersonal}
                    handleAdd={this.handleAdd}
                    handleRemove={this.handleRemove}

                />
                <Preview
                    personal={personal}
                    experiences={experiences}
                    education={education}
                />
            </div>
        );
    }
}

export default Main