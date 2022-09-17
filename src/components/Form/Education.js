import React from "react";
import EducationItem from "./EducationItem";

class Education extends React.Component {
    constructor(props) {
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleAdd(e) {
        this.props.handleAdd(e);
    }

    handleRemove(e, id) {
        this.props.handleRemove(e, id);
    }

    render() {
        const { education } = this.props;
        return (
            <div>
                <p>Education</p>
                {education.map((educationItem) => {
                    return (
                    <EducationItem 
                        educationItem={educationItem}
                        handleRemove={this.handleRemove}
                    />
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