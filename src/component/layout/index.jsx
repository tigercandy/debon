import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';

import Top from 'component/_top/index.jsx';
import Sidebar from 'component/_sidebar/index.jsx';

import 'antd/dist/antd.min.css';
import './theme.scss';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="wrapper">
                <div className="ant-layout ant-layout-has-sider">
                    <Sidebar/>
                    <div className="ant-layout debon-layout">
                        <Top/>
                        <div className="ant-layout-content debon-layout-content">
                            <div className="debon-component-wrapper-grid-content-main">
                                {this.props.children}
                            </div>
                        </div>
                        <div className="ant-layout-footer debon-layout-footer">
                            <footer className="debon-component-global-footer">
                                <div className="debon-component-global-footer-links">
                                    <Link to="/">首页</Link>
                                    <Link target="_blank" to="https://github.com/chunlintang" title="github">
                                        <Icon type="github" />
                                    </Link>
                                    <Link target="_blank" to="https://www.mantis.me/" title="博客">
                                        <Icon type="edit" />
                                    </Link>
                                    <Link target="_blank" to="https://weibo.com/tangchunlinwb">
                                        <Icon type="weibo" />
                                    </Link>
                                </div>
                                <div className="debon-component-global-footer-copyright">
                                    Copyright <Icon type="copyright" /> 2018 Mantis
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;