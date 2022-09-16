import React from "react";
import Form from "./Form/Form";
import Preview from "./Preview/Preview";

class Main extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <Form />
                <Preview />
            </div>
        );
    }
}

export default Main