import React from "react";

class Experience extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <p>Work Experience</p>
                <form>
                    <input
                        type='text'
                        id='positionInput'
                        name='positionInput'
                        placeholder='Position'
                    />
                    <input
                        type='text'
                        id='companyInput'
                        name='companyInput'
                        placeholder='Company'
                    />
                    <input
                        type='text'
                        id='workLocationInput'
                        name='workLocationInput'
                        placeholder='Location'
                    />
                    <input
                        type='text'
                        id='workStartInput'
                        name='workStartInput'
                        placeholder='Start Date'
                    />
                    <input
                        type='text'
                        id='workEndInput'
                        name='workEndInput'
                        placeholder='End Date'
                    />
                    <textarea
                        id='workDescription'
                        name='workDescription'
                    />
                    <button>Delete</button>
                </form>
                <button>Add</button>
            </div>
        );
    }
}

export default Experience