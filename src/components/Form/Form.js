import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

class Form extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <Personal />
                <Experience />
                <Education />
            </div>
        );
    }
}

export default Form