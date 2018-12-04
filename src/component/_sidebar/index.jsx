import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Icon, Menu} from 'antd';

import './sider.scss';

const {SubMenu} = Menu;

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
                    <Menu style={{padding: '16px 0px', width: '100%'}} defaultSelectedKeys={['1']}
                          defaultOpenKeys={['sub1']}
                          mode='inline' inlineCollapsed={this.props.collapsed} theme='light'>
                        <Menu.Item key='1'>
                            <Link to='/'>
                                <Icon type='dashboard'/><span>控制面板</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu key='sub1' title={<span><Icon type="form"/><span>文章管理</span></span>}>
                            <Menu.Item key='3'>
                                <Link to='/article/index'>
                                    <Icon type="bars"/><span>文章列表</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key='4'><Icon type="book"/>分类管理</Menu.Item>
                            <Menu.Item key='5'><Icon type="tags"/>标签管理</Menu.Item>
                        </SubMenu>
                        <SubMenu key='sub2' title={<span><Icon type="user" /><span>用户管理</span></span>}>
                            <Menu.Item key='6'>
                                <Link to='/user'>
                                    <Icon type="team" /><span>用户列表</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key='sub3' title={<span><Icon type="setting" /><span>设置</span></span>}>
                            <Menu.Item key='7'>
                                <Link to='/system'>
                                    <Icon type="info-circle" /><span>系统信息</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        );
    }
}

export default Sidebar;