import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from 'shared/components/Card';
import Login from './components/Login';
import './styles.scss';
import { autobind } from 'core-decorators';
import { updateUsername, updatePassword } from 'reduxStore/auth';
import 'shared/styles/font-awesome-4.7.0/css/font-awesome.css';
import WelcomeDisplay from './components/WelcomeDisplay'


@withRouter
@connect(
  state => ({
    username: state.auth.username,
    password: state.auth.password,
    searchQuery: state.supply.search_query
  }),
  {
    updateUsername,
    updatePassword
  }
)
export default class Home extends Component {
  constructor(props) {
    super(props);

  }

  getCards() {
    let x = [1, 2, 3, 4, 5, 6];
    return x.map(i => {
      return (
        <Card key={i} description="All Items">
          <img src={`assets/vendorImages/image${i}.jpg`} />
        </Card>
      );
    });
  }

  @autobind
  handleLogin(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="home-container">
        <div className="__welcome-container">
          <WelcomeDisplay {...this.props} />
          <div className="__welcome-collapse">
            <div className="__welcome-tab" onClick={() => console.log('close me')}>
              <i className="fa fa-arrow-left" />
            </div>
          </div>
        </div>
        <div className="__card-container">
          {this.getCards()}
        </div>
      </div>
    );
  }
}
