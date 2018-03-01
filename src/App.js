// Import necessary libraries
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// Main component of application
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <h1>React app</h1>
            </Fragment>
        );
    }
}

// First method for connect method
const mapStateToProps = state => {
    return {
        test: state
    };
};

// Second method for connect method
const mapDispatchToProps = dispatch => {
    return {
        testMethod: () => {
            dispatch({ type: 'TEST', payload: [] });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
