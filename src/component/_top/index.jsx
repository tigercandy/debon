import React from 'react';

import {Icon} from 'antd';

import "./top.scss";

class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }

    toggleCollapsed() {
        //console.log(this.state.collapsed);
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className="ant-layout-header debon-layout-header">
                <div className="debom-component-global-header">
                    <Icon className="debon-component-global-header-trigger" type="menu-fold"
                          onClick={() => this.toggleCollapsed()}/>
                    <div className="debon-component-global-header-right">
                        <span className="debon-component-global-header-account ant-dropdown-trigger">
                            <span
                                className="ant-avatar ant-avatar-sm ant-avatar-circle ant-avatar-image debon-component-global-header-account-avatar">
                                <img src="https://avatars1.githubusercontent.com/u/8286273?s=460&v=4"/>
                            </span>
                            <span className="debon-component-global-header-account-name">Mantis</span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Top;