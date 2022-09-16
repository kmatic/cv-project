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
            experience: [],
            education: [],
        }
    }

    render() {
        return (
            <div>
                <Form />
                <Preview />
            </div>
        );
    }
}

export default Main