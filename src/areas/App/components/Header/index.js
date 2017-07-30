import React, { Component } from 'react';
import TextField from 'shared/components/TextField';
import { autobind } from 'core-decorators';

import './styles.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    @autobind
    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    render () {
        return (
            <div className="header">
                <div className="__logo">
                    Logo here :)
                </div>
                <div className="__actions">
                    <TextField
                        value={this.state.value}
                        label="text"
                        onChange={this.handleChange}
                    />
                    <button />
                </div>
            </div>
        )
    }
}

export default Header;