import React from 'react';

import Top from 'component/_top/index.jsx';
import Sidebar from 'component/_sidebar/index.jsx';

import 'antd/dist/antd.min.css';
import './component.css';
import './themes.css';

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
                            <div className="antd-pro-components-page-header-wrapper-grid-content-main">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;