import React from 'react';
import PasswordInput from 'react-reuse/PasswordInput';

/** All features enabled */
class ExampleAllFeatures extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: ''
        };
    }

    getQuality() {
        const length = this.state.password.length;
        return length > 10 ? 100 : length * 10;
    }

    render() {
        return (
            <div>
                <PasswordInput
                    htmlId="password-input-example-all"
                    name="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    error="First name is required"
                    minLength={8}
                    onChange={event => this.setState({
                        password: event.target.value
                    })}
                    quality={this.getQuality()}
                    showVisibilityToggle
                    {...this.props}
                />
            </div>
        );
    }
}

export default ExampleAllFeatures;
