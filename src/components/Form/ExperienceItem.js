import React from "react";
import styled from 'styled-components';

class ExperienceItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { experience, handleRemove, handleExperience } = this.props;
        return (
            <div>
                <Form>
                    <Input
                        type='text'
                        name='position'
                        placeholder='Position'
                        value={experience.position}
                        onChange={(e) => handleExperience(e, experience.id)}
                    />
                    <Input
                        type='text'
                        name='company'
                        placeholder='Company'
                        value={experience.company}
                        onChange={(e) => handleExperience(e, experience.id)}
                    />
                    <Input
                        type='text'
                        name='location'
                        placeholder='Location'
                        value={experience.location}
                        onChange={(e) => handleExperience(e, experience.id)}
                    />
                    <Input
                        type='text'
                        name='start'
                        placeholder='Start Date'
                        value={experience.start}
                        onChange={(e) => handleExperience(e, experience.id)}
                    />
                    <Input
                        type='text'
                        name='end'
                        placeholder='End Date'
                        value={experience.end}
                        onChange={(e) => handleExperience(e, experience.id)}
                    />
                    <Textarea
                        name='desc'
                        placeholder='Description'
                        value={experience.desc}
                        onChange={(e) => handleExperience(e, experience.id)}
                    />
                    <Button name='expDel' onClick={(e) => handleRemove(e, experience.id)}>
                        Delete
                    </Button>
                </Form>
            </div>
        );
    }
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Input = styled.input`
    padding: 8px;
    border: 1px solid lightgray;
    border-radius: 4px;
`;

const Textarea = styled.textarea`
    padding: 8px;
    border: 1px solid lightgray;
    border-radius: 4px;
`;

const Button = styled.button`
    padding: 8px;
    background-color: #CC0000;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
`;

export default ExperienceItem