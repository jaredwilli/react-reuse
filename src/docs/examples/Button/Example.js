import React from 'react';
import Button from 'react-reuse/Button';

class Example extends React.Component {
    state = {
        loading: false
    };

    showMessage = () => {
        /* eslint-disable no-alert */
        // alert('Changed!');

        this.setState({
            loading: true
        });
    };

    render() {
        const { loading } = this.state;

        return (
            <div>
                <Button
                    htmlId="default-button"
                    name="default-button"
                    onClick={() => this.showMessage()}
                >
                    Default
                </Button>
                <br />
                <br />

                <Button
                    htmlId="default-button"
                    name="default-button"
                    onClick={() => this.showMessage()}
                >
                    Sign In
                </Button>
                <br />
                <br />

                <Button
                    htmlId="regular-button"
                    name="regular-button"
                    onClick={() => this.showMessage()}
                >
                    Shop the Monday Drop
                </Button>
                <br />
                <br />

                <Button
                    htmlId="block-button"
                    name="block-button"
                    onClick={() => this.showMessage()}
                    classname="block"
                >
                    Block Level Button
                </Button>
                <br />
                <br />

                <Button
                    htmlId="disabled-button"
                    name="disabled-button"
                    onClick={() => this.showMessage()}
                    disabled="true"
                >
                    Disabled Button
                </Button>
                <br />
                <br />

                <Button
                    htmlId="disabled-button"
                    name="disabled-button"
                    onClick={() => this.showMessage()}
                    disabled="true"
                    classname="block"
                >
                    Disabled Block Level Button
                </Button>
                <br />
                <br />

                <Button
                    htmlId="waitlist-button"
                    name="waitlist-button"
                    onClick={() => this.showMessage()}
                    classname="waitlist"
                >
                    Add to Waitlist
                </Button>
                <br />
                <br />

                <Button
                    htmlId="waitlist-button"
                    name="waitlist-button"
                    onClick={() => this.showMessage()}
                    classname="waitlist block"
                >
                    Waitlist Block Level
                </Button>
                <br />
                <br />

                <Button
                    htmlId="loading-button"
                    name="loading-button"
                    onClick={() => this.showMessage()}
                    classname=""
                    isLoading={loading}
                >
                    Submit with Loader
                </Button>
                <br />
                <br />

            </div>
        );
    }
}

export default Example;
