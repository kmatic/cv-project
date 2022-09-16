import React from "react";

class EducationItem extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        id='programInput'
                        name='programInput'
                        placeholder='Program'
                    />
                    <input
                        type='text'
                        id='uniInput'
                        name='uniInput'
                        placeholder='University'
                    />
                    <input
                        type='text'
                        id='uniStartInput'
                        name='uniStartInput'
                        placeholder='Start Date'
                    />
                    <input
                        type='text'
                        id='uniEndInput'
                        name='uniEndInput'
                        placeholder='End Date'
                    />
                    <button>Delete</button>
                </form>
            </div>
        );
    }
}

export default EducationItem