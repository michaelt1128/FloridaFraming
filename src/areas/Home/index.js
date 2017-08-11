import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "shared/components/Card";
import Login from "./components/Login";
import "./styles.scss";
import { autobind } from "core-decorators";
import { updateUsername, updatePassword } from "../../redux-store/auth";
import "shared/styles/font-awesome-4.7.0/css/font-awesome.css";
import { slideOut } from "react-animations";

@withRouter
@connect(
  state => ({
    username: state.auth.username,
    password: state.auth.password,
    search_query: state.supply.search_query
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
          <div className="__welcome-content">
            <div className="__welcome-text">
              <h3>Welcome to the site</h3>
              Welcome to florida Framing Supplies, Jacksonville's
              number one wholesaler of mats and mouldings.
              We supply custom cut mats, mat board, picture
              frames & framing supplies at wholesale prices to
              your needs. All of our supplies are of the highest
              quality and are manufactured by one of the following:
              <ul>
                <li>
                  <a
                    target="__blank"
                    href="http://www.crescentcardboard.com/#home"
                  >
                    Crescent
                  </a>
                </li>
                <li>
                  <a target="__blank" href="https://tru-vue.com/">Tru Vue</a>
                </li>
                <li>
                  <a
                    target="__blank"
                    href="https://www.nielsen-design.de/en-EN/home/"
                  >
                    NielsenBainBridge
                  </a>
                </li>
              </ul>
            </div>
            <div className="__welcome-login">
              <Login handleLogin={this.handleLogin} props={this.props} />
            </div>
          </div>
          <div className="__welcome-collapse">
            <div
              className="__welcome-tab"
            >
              <div className="__icon">
                <i
                  id="__welcome-icon"
                  className="fa fa-arrow-left"
                  aria-hidden="true"
                />
              </div>
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
