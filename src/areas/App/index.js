import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeContainer from '../Home';
import TestContainer from '../Test';
import Header from './components/Header';
import Footer from './components/Footer';

@withRouter
@connect(state => ({}),{})
export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/test" component={TestContainer} />
                <Footer />
            </div>
        );
    }
}