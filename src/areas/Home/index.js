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
                <div className="__welcome-container">
                    <h3>Welcome to the site</h3>
                    Welcome to florida Framing Supplies, Jacksonville's 
                    number one wholesaler of mats and mouldings. 
                    We supply custom cut mats, mat board, picture 
                    frames & framing supplies at wholesale prices to 
                    your needs. All of our supplies are of the highest 
                    quality and are manufactured by one of the following:
                </div>
                <div className="__card-container">
                    <Card description="This is a card example">
                        <img src="assets/vendorImages/image1.jpg" />
                    </Card>
                    <Card description="This is a card example">
                        <img src="assets/vendorImages/image2.jpg" />
                    </Card>
                    <Card description="This is a card example">
                        <img src="assets/vendorImages/image3.jpg" />
                    </Card>
                    <Card description="This is a card example">
                        <img src="assets/vendorImages/image4.jpg" />
                    </Card>
                    <Card description="This is a card example">
                        <img src="assets/vendorImages/image5.jpg" />
                    </Card>
                    <Card description="This is a card example">
                        <img src="assets/vendorImages/image6.jpg" />
                    </Card>
                </div>
            </div>
        );
    }
}