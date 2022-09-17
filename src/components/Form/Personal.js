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
        const { personal } = this.props;

        return (
            <div>
                <form>
                    <p>Personal Information</p>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={personal.name}
                        onChange={this.handlePersonal}
                    />
                    <input
                        type='text'
                        name='title'
                        placeholder='Title'
                        value={personal.title}
                        onChange={this.handlePersonal}
                    />
                    <input
                        type='tel'
                        name='phone'
                        placeholder='Phone Number'
                        value={personal.phone}
                        onChange={this.handlePersonal}
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Email Address'
                        value={personal.email}
                        onChange={this.handlePersonal}
                    />
                    <input
                        type='text'
                        name='location'
                        placeholder='Location'
                        value={personal.location}
                        onChange={this.handlePersonal}
                    />
                    <input
                        type='url'
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