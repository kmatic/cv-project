import React from "react";

class ExperienceItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { experience, handleRemove } = this.props;
        return (
            <div>
                <form>
                    <input
                        type='text'
                        id='positionInput'
                        name='positionInput'
                        placeholder='Position'
                        // value={experience.position}
                    />
                    <input
                        type='text'
                        id='companyInput'
                        name='companyInput'
                        placeholder='Company'
                        // value={experience.company}
                    />
                    <input
                        type='text'
                        id='workLocationInput'
                        name='workLocationInput'
                        placeholder='Location'
                        // value={experience.location}
                    />
                    <input
                        type='text'
                        id='workStartInput'
                        name='workStartInput'
                        placeholder='Start Date'
                        // value={experience.start}
                    />
                    <input
                        type='text'
                        id='workEndInput'
                        name='workEndInput'
                        placeholder='End Date'
                        // value={experience.end}
                    />
                    <textarea
                        id='workDescription'
                        name='workDescription'
                        placeholder='Description'
                        // value={experience.desc}
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