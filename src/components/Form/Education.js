import React from "react";
import EducationItem from "./EducationItem";

class Education extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <p>Education</p>
                <EducationItem />
                <button>Add</button>
            </div>
        );
    }
}

export default Education