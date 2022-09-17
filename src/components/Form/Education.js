import React from "react";
import EducationItem from "./EducationItem";

class Education extends React.Component {
    constructor(props) {
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        this.props.handleAdd(e);
    }

    render() {
        const { education } = this.props;
        return (
            <div>
                <p>Education</p>
                {education.map((educationItem) => {
                    return (
                    <EducationItem />
                    )
                })}
                <button onClick={this.handleAdd} name='educationItem'>
                    Add
                </button>
            </div>
        );
    }
}

export default Education