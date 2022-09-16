import React from "react";

class ExperienceItem extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
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
                        placeholder='Description'
                    />
                    <button>Delete</button>
                </form>
            </div>
        );
    }
}

export default ExperienceItem