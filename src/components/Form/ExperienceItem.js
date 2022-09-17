import React from "react";

class ExperienceItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { experience, handleRemove, handleExperience } = this.props;
        return (
            <div>
                <form>
                    <input
                        type='text'
                        name='position'
                        placeholder='Position'
                        value={experience.position}
                        onChange={(e) => handleExperience(e, experience.id)}
                    />
                    <input
                        type='text'
                        name='company'
                        placeholder='Company'
                        value={experience.company}
                        onChange={(e) => handleExperience(e, experience.id)}
                    />
                    <input
                        type='text'
                        name='location'
                        placeholder='Location'
                        value={experience.location}
                        onChange={(e) => handleExperience(e, experience.id)}
                    />
                    <input
                        type='text'
                        name='start'
                        placeholder='Start Date'
                        value={experience.start}
                        onChange={(e) => handleExperience(e, experience.id)}
                    />
                    <input
                        type='text'
                        name='end'
                        placeholder='End Date'
                        value={experience.end}
                        onChange={(e) => handleExperience(e, experience.id)}
                    />
                    <textarea
                        name='desc'
                        placeholder='Description'
                        value={experience.desc}
                        onChange={(e) => handleExperience(e, experience.id)}
                    />
                    <button name='expDel' onClick={(e) => handleRemove(e, experience.id)}>
                        Delete
                    </button>
                </form>
            </div>
        );
    }
}

export default ExperienceItem