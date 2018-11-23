import React from 'react';
import {Link, NavLink} from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="antd-pro-components-sider-menu-index-sider antd-pro-components-sider-menu-index-fixSiderbar antd-pro-components-sider-menu-index-light ant-layout-sider ant-layout-sider-light debon-sider-menu-index-sider">
                <div className="ant-layout-sider-children">
                    <div className="antd-pro-components-sider-menu-index-logo" id="logo">
                        <Link to="/">
                            <h1>Debon</h1>
                        </Link>
                    </div>
                    <ul className="ant-menu ant-menu-light ant-menu-root ant-menu-inline debon-menu-ul" role="menu">
                        <li className="ant-menu-submenu ant-menu-submenu-inline ant-menu-submenu-open ant-menu-submenu-selected"
                            role="menuitem">
                            <div className="ant-menu-submenu-title debon-menu-title" aria-expanded="true" aria-owns="/dashboard$Menu"
                                 aria-haspopup="true">
                                <span>
                                    <i className="anticon anticon-dashboard">
                                        <svg viewBox="64 64 896 896" className=""
                                             data-icon="dashboard" width="1em"
                                             height="1em" fill="currentColor"
                                             aria-hidden="true">
                                            <path
                                                d="M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 0 1 140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 0 0-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 0 0 0 79.2 55.95 55.95 0 0 0 79.2 0 55.87 55.87 0 0 0 14.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 0 0-11.3 0l-56.6 56.6a8.03 8.03 0 0 0 0 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 0 0-11.3 0l-31.1 31.1a8.03 8.03 0 0 0 0 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z">
                                            </path>
                                        </svg>
                                    </i>
                                    <span>Dashboard</span>
                                </span>
                                <i className="ant-menu-submenu-arrow"></i>
                            </div>
                            <ul id="/dashboard$Menu" className="ant-menu  ant-menu-sub ant-menu-inline" role="menu">
                                <li className="ant-menu-item ant-menu-item-selected debon-menu-item" role="menuitem">
                                    <a href="/dashboard/analysis">
                                        <span>分析页</span>
                                    </a>
                                </li>
                                <li className="ant-menu-item debon-menu-item" role="menuitem"><a
                                    href="/dashboard/monitor"><span>监控页</span></a></li>
                                <li className="ant-menu-item debon-menu-item" role="menuitem"><a
                                    href="/dashboard/workplace"><span>工作台</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;