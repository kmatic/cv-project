import React from "react";
import EducationItem from "./EducationItem";
import styled from 'styled-components';

class Education extends React.Component {
    constructor(props) {
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEducation = this.handleEducation.bind(this);
    }

    handleAdd(e) {
        this.props.handleAdd(e);
    }

    handleRemove(e, id) {
        this.props.handleRemove(e, id);
    }

    handleEducation(e, id) {
        this.props.handleEducation(e, id);
    }

    render() {
        const { education } = this.props;
        return (
            <Div>
                <Title>Education</Title>
                {education.map((educationItem) => {
                    return (
                    <EducationItem 
                        educationItem={educationItem}
                        handleRemove={this.handleRemove}
                        handleEducation={this.handleEducation}
                    />
                    )
                })}
                <Button onClick={this.handleAdd} name='educationItem'>
                    Add
                </Button>
            </Div>
        );
    }
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