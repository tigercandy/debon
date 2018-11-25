import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Icon} from 'antd';

import './sider.scss';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="debon-component-sidebar-main ant-layout-sider ant-layout-sider-light">
                <div className="ant-layout-sider-children">
                    <div className="debon-component-sidebar-logo">
                        <Link to="/">
                            <h1>Debon</h1>
                        </Link>
                    </div>
                    <ul className="ant-menu ant-menu-root ant-menu-inline debon-component-menu-ul" role="menu">
                        <li className="ant-menu-submenu ant-menu-item-selected" role="menuitem">
                            <div className="ant-menu-submenu-title debon-parent-menu" aria-expanded="true" aria-haspopup="true">
                                <Link to="/">
                                    <Icon type="dashboard" />
                                    <span>控制面板</span>
                                </Link>
                            </div>
                        </li>
                        <li className="ant-menu-submenu ant-menu-inline" role="menuitem">
                            <div className="ant-menu-submenu-title debon-parent-menu" aria-expanded="true" aria-haspopup="true">
                                <span>
                                    <Icon type="form" />
                                    <span>文章管理</span>
                                </span>
                                <i className="ant-menu-submenu-arrow"></i>
                            </div>
                            <ul className="ant-menu ant-menu-sub ant-menu-inline debon-component-menu-ul-sub">
                                <li className="ant-menu-item" role="menuitem">
                                    <Link to="/article">
                                        <Icon type="bars" />
                                        <span>文章列表</span>
                                    </Link>
                                </li>
                                <li className="ant-menu-item" role="menuitem">
                                    <Link to="/">
                                        <Icon type="book" />
                                        <span>分类管理</span>
                                    </Link>
                                </li>
                                <li className="ant-menu-item" role="menuitem">
                                    <Link to="/">
                                        <Icon type="tags" />
                                        <span>标签管理</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        );
    }
}

export default Sidebar;