// Import necessary libraries
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

// Import pages
import StartPage from "./pages/StartPage";

// Main component of application
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header />

                        <Switch>
                            <Route exact component={ StartPage } path={ StartPage.path } />
                        </Switch>

                    <Footer />
                </Fragment>
            </BrowserRouter>
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
