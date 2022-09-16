import React from "react";
import Personal from "./Personal";

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
            </div>
        )
    }
}

export default Preview