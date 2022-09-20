import React from "react";
import styled from 'styled-components';

class Personal extends React.Component {
    constructor(props) {
        super(props);

        this.handlePersonal = this.handlePersonal.bind(this);
    }

    handlePersonal(e) {
        this.props.handlePersonal(e);
    }

    render() {
        const { personal } = this.props;

        return (
            <div>
                <Form>
                    <Title>Personal Information</Title>
                    <Input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={personal.name}
                        onChange={this.handlePersonal}
                    />
                    <Input
                        type='text'
                        name='title'
                        placeholder='Title'
                        value={personal.title}
                        onChange={this.handlePersonal}
                    />
                    <Input
                        type='tel'
                        name='phone'
                        placeholder='Phone Number'
                        value={personal.phone}
                        onChange={this.handlePersonal}
                    />
                    <Input
                        type='email'
                        name='email'
                        placeholder='Email Address'
                        value={personal.email}
                        onChange={this.handlePersonal}
                    />
                    <Input
                        type='text'
                        name='location'
                        placeholder='Location'
                        value={personal.location}
                        onChange={this.handlePersonal}
                    />
                    <Input
                        type='url'
                        name='website'
                        placeholder='Website'
                        value={personal.website}
                        onChange={this.handlePersonal}
                    />
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

const Title = styled.h2`
    text-align: left;
    margin-bottom: 0;
    margin-top: 0;
`;

export default Personal