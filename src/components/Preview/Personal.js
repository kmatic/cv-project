import React from "react";
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaLocationArrow, FaLinkedinIn } from 'react-icons/fa';

const Personal = ({ personal }) => {
    return (
        <MainDiv>
            <NameTitle>
                <h1>{personal.name}</h1>
                <h2>{personal.title}</h2>
            </NameTitle>
            <Info>
                <div>
                    <FaPhone />
                    <p>{personal.phone}</p>
                </div>
                <div>
                    <FaEnvelope />
                    <p>{personal.email}</p>
                </div>
                <div>
                    <FaLocationArrow />
                    <p>{personal.location}</p>
                </div>
                <div>
                    <FaLinkedinIn />
                    <p>{personal.website}</p>
                </div>
            </Info>
        </MainDiv>
    );
}

const MainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid lightgray;
    padding-bottom: 25px;
`;

const NameTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    > h1 {
        margin: 0;
        font-size: 2.2rem;
    }

    > h2 {
        margin: 0;
        color: #575757;
        font-weight: 400
    }
`;

const Info = styled.div`
    display:flex;
    flex-direction: column;
    gap: 6px;
    font-size: 0.8rem;
    justify-content: center;

    > div {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    > div > p {
        margin: 0;
    }
`;

export default Personal