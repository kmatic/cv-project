import React from "react";

class Personal extends React.Component {
    constructor(props) {
        super(props);

        this.handlePersonal = this.handlePersonal.bind(this);
    }

    handlePersonal(e) {
        this.props.handlePersonal(e);
    }

    render() {
        const personal = this.props;

        return (
            <div>
                <form>
                    <p>Personal Information</p>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Name'
                        value={personal.name}
                        onChange={this.handlePersonal}
                    />
                    <input
                        type='text'
                        id='title'
                        name='title'
                        placeholder='Title'
                        value={personal.title}
                        onChange={this.handlePersonal}
                    />
                    <input
                        type='tel'
                        id='phone'
                        name='phone'
                        placeholder='Phone Number'
                        value={personal.phone}
                        onChange={this.handlePersonal}
                    />
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email Address'
                        value={personal.email}
                        onChange={this.handlePersonal}
                    />
                    <input
                        type='text'
                        id='location'
                        name='location'
                        placeholder='Location'
                        value={personal.location}
                        onChange={this.handlePersonal}
                    />
                    <input
                        type='url'
                        id='website'
                        name='website'
                        placeholder='Website'
                        value={personal.website}
                        onChange={this.handlePersonal}
                    />
                </form>
            </div>
        );
    }
}

export default Personal