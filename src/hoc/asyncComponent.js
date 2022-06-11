import React from "react";

const asyncComponent = (importComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                Component: null
            };
        }

        componentDidMount() {
            importComponent().then(Component => {
                this.setState({ Component : Component.default });
            });
        }

        render() {
            const { Component } = this.state;
            return Component ? <Component {...this.props} /> : null;
        }
    };
}

export default asyncComponent;