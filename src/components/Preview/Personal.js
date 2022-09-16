import React from "react";

class Personal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { personal } = this.props;

        return (
            <div>
                <p>Name: {personal.name}</p>
                <p>Title: {personal.title}</p>
                <p>Phone: {personal.phone}</p>
                <p>Email: {personal.email}</p>
            </div>
        );
    }
}

export default Personal