import React from "react";
import ExperienceItem from "./ExperienceItem";

class Experience extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <p>Work Experience</p>
                <ExperienceItem />
                <button>Add</button>
            </div>
        );
    }
}

export default Experience