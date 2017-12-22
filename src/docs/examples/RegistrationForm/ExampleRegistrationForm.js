import React from 'react';
import RegistrationForm from 'react-reuse/RegistrationForm';

export default class ExampleRegistrationForm extends React.Component {
    onSubmit = (user) => {
        console.log(user);
    }

    render() {
        return <RegistrationForm onSubmit={this.onSubmit} />
    };
}
