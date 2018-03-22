import React from 'react';
import withStorage from 'react-reuse/withStorage';

/** All features enabled */

class ExampleWithStorage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };
    }

    componentDidMount() {
        let username = this.props.load('username');

        if (!username) {
            this.props.save('username', 'jaredwilli');
            username = this.props.load('username');
        }

        this.setState({ 'username': username })
    }

    render() {
        const { username } = this.state;

        if (!username) {
            return <div>Loading...</div>;
        }

        return (
            <div>Hello {username}</div>
        );
    }
};

export default withStorage(ExampleWithStorage);
