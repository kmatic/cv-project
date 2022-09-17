import React from "react";

class EducationItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { educationItem, handleRemove } = this.props;
        return (
            <div>
                <form>
                    <input
                        type='text'
                        id='programInput'
                        name='programInput'
                        placeholder='Program'
                        value={educationItem.program}
                    />
                    <input
                        type='text'
                        id='uniInput'
                        name='uniInput'
                        placeholder='University'
                        value={educationItem.university}
                    />
                    <input
                        type='text'
                        id='uniStartInput'
                        name='uniStartInput'
                        placeholder='Start Date'
                        value={educationItem.start}
                    />
                    <input
                        type='text'
                        id='uniEndInput'
                        name='uniEndInput'
                        placeholder='End Date'
                        value={educationItem.end}
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