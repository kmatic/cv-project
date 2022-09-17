import React from "react";
import ExperienceItem from "./ExperienceItem";

class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        this.props.handleAdd(e);
    }

    render() {
        const { experiences } = this.props;
        return (
            <div>
                <p>Work Experience</p>
                {experiences.map((experience) => {
                    return (
                    <ExperienceItem />
                    )
                })}
                <button onClick={this.handleAdd} name='experienceItem'>
                    Add
                </button>
            </div>
        );
    }
}

export default Experience