import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

@withRouter
@connect(state => ({}),{})
export default class Test extends Component {
    render(){
        return(
            <div>
                Test<br />
                <Link to="/">Go Home</Link>
            </div>
        );
    }
}