import React from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

class Preview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { personal, experiences, education } = this.props
        
        return (
            <div>
                <Personal
                    personal={personal}
                />
                <Experience
                    experiences={experiences}
                />
                <Education
                    education={education}
                />
            </div>
        )
    }
}

export default Preview