import React, { Component } from 'react';
import { withRouter,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from 'shared/components/Card';

import './styles.scss';

@withRouter
@connect(state => ({}),{})
export default class Home extends Component {
    gibberish() {
        const ex = {
            lol: ''
        }
        delete ex.lol;
    }

    render() {
        return (
            <div className="home-container">
                Home<br />
                <Link to="/test">To Test</Link>
                <div className="__card-container">
                    <Card description="This is a card example">
                        Children content
                    </Card>
                    <Card description="This is a card example">
                        Children content
                    </Card>
                    <Card description="This is a card example">
                        Children content
                    </Card>
                    <Card description="This is a card example">
                        Children content
                    </Card>
                    <Card description="This is a card example">
                        Children content
                    </Card>
                    <Card description="This is a card example">
                        Children content
                    </Card>
                </div>
            </div>
        );
    }
}