import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';

import './error.scss';

class Error extends React.Component {
    render() {
        return (
            <div className="debon-component-not-found-main">
                <div className="debon-component-not-found-image-block">
                    <div className="debon-component-not-found-image-backgroup"></div>
                </div>
                <div className="debon-component-not-fount-404-text">
                    <h1>404</h1>
                    <div className="debon-component-not-fount-desc">
                        页面竟然找不到了!
                    </div>
                    <div className="debon-component-not-fount-action-btn">
                        <Link to="/">
                            <Button type="primary">返回首页</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error;