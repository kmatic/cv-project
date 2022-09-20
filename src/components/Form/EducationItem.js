import React from "react";
import styled from 'styled-components';

class EducationItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { educationItem, handleRemove, handleEducation } = this.props;
        return (
            <div>
                <Form>
                    <Input
                        type='text'
                        name='program'
                        placeholder='Program'
                        value={educationItem.program}
                        onChange={(e) => handleEducation(e, educationItem.id)}
                    />
                    <Input
                        type='text'
                        name='university'
                        placeholder='University'
                        value={educationItem.university}
                        onChange={(e) => handleEducation(e, educationItem.id)}
                    />
                    <Input
                        type='text'
                        name='start'
                        placeholder='Start Date'
                        value={educationItem.start}
                        onChange={(e) => handleEducation(e, educationItem.id)}
                    />
                    <Input
                        type='text'
                        name='end'
                        placeholder='End Date'
                        value={educationItem.end}
                        onChange={(e) => handleEducation(e, educationItem.id)}
                    />
                    <Button name='eduDel' onClick={(e) => handleRemove(e, educationItem.id)}>
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

const Button = styled.button`
    padding: 8px;
    background-color: #CC0000;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
`;

export default EducationItem