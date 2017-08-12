import React, { Component } from 'react';
import classnames from 'classnames';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import { updateUsername, updatePassword } from 'reduxStore/auth';
import Card from 'shared/components/Card';
import 'shared/styles/font-awesome-4.7.0/css/font-awesome.css';
import Login from './components/Login';
import WelcomeDisplay from './components/WelcomeDisplay'
import './styles.scss';


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
  state = {
    showWelcomeDisplay: true
  };

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
    const welcomeCollapseCn = classnames('__welcome-collapse', { '--left': !this.state.showWelcomeDisplay });
    const welcomeContainerCn = classnames('__welcome-container', { '--closed': !this.state.showWelcomeDisplay });
    return (
      <div className="home-container">
        <div className={welcomeContainerCn}>
          <WelcomeDisplay {...this.props} {...this.state} />
          <div className={welcomeCollapseCn}>
            <div
              className="__welcome-tab"
              onClick={() => this.setState({ showWelcomeDisplay: !this.state.showWelcomeDisplay })}
            >
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
