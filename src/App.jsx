// Import necessary libraries
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// Import components
import Header from './components/Header';
import CenterScreenBlock from './components/CenterScreenBlock';

// Main component of application
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Header />
                <h1>React app</h1>
                <CenterScreenBlock>gjghj</CenterScreenBlock>
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
