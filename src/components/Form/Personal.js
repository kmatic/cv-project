import React from "react";

class Personal extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <form>
                    <p>Personal Information</p>
                    <input
                        type='text'
                        id='nameInput'
                        name='nameInput'
                        placeholder='Name'
                    />
                    <input
                        type='text'
                        id='titleInput'
                        name='titleInput'
                        placeholder='Title'
                    />
                    <input
                        type='tel'
                        id='phoneInput'
                        name='phoneInput'
                        placeholder='Phone Number'
                    />
                    <input
                        type='email'
                        id='emailInput'
                        name='emailInput'
                        placeholder='Email Address'
                    />
                    <input
                        type='text'
                        id='locationInput'
                        name='locationInput'
                        placeholder='Location'
                    />
                    <input
                        type='url'
                        id='webInput'
                        name='webInput'
                        placeholder='Website'
                    />
                </form>
            </div>
        );
    }
}

export default Personal