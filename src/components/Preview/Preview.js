import React from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import styled from 'styled-components';

class Preview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { personal, experiences, education } = this.props
        
        return (
            <Div>
                <Personal
                    personal={personal}
                />
                <Experience
                    experiences={experiences}
                />
                <Education
                    education={education}
                />
            </Div>
        )
    }
}

const Div = styled.div`
    padding: 50px;
    width: 850px;
    background-color: white;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    position: sticky;
    top: 20px;
`;

export default Preview