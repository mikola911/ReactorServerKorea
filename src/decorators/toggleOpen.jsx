import React from "react";

export default Original =>
    class Wrapped extends React.Component {
        state = {
            isOpen: false
        };

        render() {
            return (
                <Original
                    {...this.props}
                    isOpen={this.state.isOpen}
                    toggle={this.toggle}
                />
            );
        }

        toggle = ev => {
            ev && ev.preventDefault && ev.preventDefault();
            this.setState({
                isOpen: !this.state.isOpen
            });
            // console.log(this.state);
        };
    };
