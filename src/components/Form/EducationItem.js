import React from "react";

class EducationItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { educationItem, handleRemove, handleEducation } = this.props;
        return (
            <div>
                <form>
                    <input
                        type='text'
                        name='program'
                        placeholder='Program'
                        value={educationItem.program}
                        onChange={(e) => handleEducation(e, educationItem.id)}
                    />
                    <input
                        type='text'
                        name='university'
                        placeholder='University'
                        value={educationItem.university}
                        onChange={(e) => handleEducation(e, educationItem.id)}
                    />
                    <input
                        type='text'
                        name='start'
                        placeholder='Start Date'
                        value={educationItem.start}
                        onChange={(e) => handleEducation(e, educationItem.id)}
                    />
                    <input
                        type='text'
                        name='end'
                        placeholder='End Date'
                        value={educationItem.end}
                        onChange={(e) => handleEducation(e, educationItem.id)}
                    />
                    <button name='eduDel' onClick={(e) => handleRemove(e, educationItem.id)}>
                        Delete
                    </button>
                </form>
            </div>
        );
    }
}

export default EducationItem