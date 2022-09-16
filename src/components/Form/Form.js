import React from "react";
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
            </div>
        );
    }
}

export default Form