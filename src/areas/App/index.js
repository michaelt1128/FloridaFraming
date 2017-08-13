import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeContainer from '../Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.scss';

@withRouter
@connect(state => ({}),{})
export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    <Route exact path="/" component={HomeContainer} />
                </div>
                <Footer />
            </div>
        );
    }
}