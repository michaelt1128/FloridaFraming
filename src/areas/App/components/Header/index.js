import React, { Component } from "react";
import TextField from "shared/components/TextField";
import { autobind } from "core-decorators";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateSearch } from "../../../../redux-store/supplies";
import "./styles.scss";

@withRouter
@connect(
  state => ({
    search_query: state.supply.search_query
  }),
  { updateSearch }
)
class Header extends Component {
  constructor(props) {
    super(props);
  }

  @autobind
  handleChange(e) {
    this.props.updateSearch(e.target.value);
  }

  render() {
    return (
      <div className="header">
        <div className="__logo">
          <img className="__logo-image" src="assets/Florida_Framing.jpg" />
        </div>
        <div className="__actions">
          <TextField
            value={this.props.search_query}
            label="Search"
            onChange={this.handleChange}
          />
          <button className="__button">Search</button>
        </div>
      </div>
    );
  }
}

export default Header;
