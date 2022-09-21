import React from "react";
import styled from 'styled-components';

const Personal = ({ personal, handlePersonal }) => {
    return (
        <div>
            <Form>
                <Title>Personal Information</Title>
                <Input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={personal.name}
                    onChange={handlePersonal}
                />
                <Input
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={personal.title}
                    onChange={handlePersonal}
                />
                <Input
                    type='tel'
                    name='phone'
                    placeholder='Phone Number'
                    value={personal.phone}
                    onChange={handlePersonal}
                />
                <Input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    value={personal.email}
                    onChange={handlePersonal}
                />
                <Input
                    type='text'
                    name='location'
                    placeholder='Location'
                    value={personal.location}
                    onChange={handlePersonal}
                />
                <Input
                    type='url'
                    name='website'
                    placeholder='Website'
                    value={personal.website}
                    onChange={handlePersonal}
                />
            </Form>
        </div>
    );
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