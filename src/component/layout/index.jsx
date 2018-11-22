import React from 'react';

import Top from 'component/_top/index.jsx';
import Sidebar from 'component/_sidebar/index.jsx';

import 'antd/dist/antd.min.css';
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
                        {this.props.children}
                    </div>
                    <Top/>
                </div>
            </div>
        );
    }
}

export default Layout;