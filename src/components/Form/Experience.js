import React from "react";
import ExperienceItem from "./ExperienceItem";

class Experience extends React.Component {
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
        const { experiences } = this.props;
        return (
            <div>
                <p>Work Experience</p>
                {experiences.map((experience) => {
                    return (
                    <ExperienceItem
                        experience={experience}
                        handleRemove={this.handleRemove}
                    />
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