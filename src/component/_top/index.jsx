import React from 'react';
import {Icon, Dropdown, Menu} from 'antd';

import MUtil from 'util/mm.jsx';
import Auth from 'service/auth.jsx';

const _mm = new MUtil();
const _auth = new Auth();

import "./top.scss";

class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            username: _mm.getStorage('auth_info').username || '',
            redirect: '/auth/login'
        }
    }

    toggleCollapsed() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    onLogout() {
        let token = _mm.getStorage('auth_info').token,
            data = {token: token};
        _auth.logout(data).then(res => {
            _mm.removeStorage('auth_info');
            _mm.doLogin();
        }, errMsg => {
            _mm.errorTips(errMsg);
        })
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item key="1"><Icon type="user"/>个人中心</Menu.Item>
                <Menu.Item key="2"><Icon type="setting"/>个人设置</Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="3" onClick={() => {
                    this.onLogout()
                }}><Icon type="logout"/>退出登录</Menu.Item>
            </Menu>
        );
        return (
            <div className="ant-layout-header debon-layout-header">
                <div className="debom-component-global-header">
                    <Icon className="debon-component-global-header-trigger" type="menu-fold"
                          onClick={() => this.toggleCollapsed()}/>
                    <div className="debon-component-global-header-right">
                        <Dropdown overlay={menu}>
                            <span className="debon-component-global-header-account ant-dropdown-trigger">
                            <span
                                className="ant-avatar ant-avatar-sm ant-avatar-circle ant-avatar-image debon-component-global-header-account-avatar">
                                <img src="https://avatars1.githubusercontent.com/u/8286273?s=460&v=4"/>
                            </span>
                            <span className="debon-component-global-header-account-name">{this.state.username}</span>
                        </span>
                        </Dropdown>
                    </div>
                </div>
            </div>
        );
    }
}

export default Top;