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
    }

    handlePersonal(e) {
        this.setState({
            personal: {
                ...this.state.personal,
                [e.target.name]: e.target.value,
            }
        });
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