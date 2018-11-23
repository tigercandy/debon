import React from 'react';

class Top extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ant-layout-header debon-layout-header">
                <div className="antd-pro-components-global-header-index-header">
                    <i className="anticon anticon-menu-fold antd-pro-components-global-header-index-trigger">
                        <svg viewBox="64 64 896 896" className="" data-icon="menu-fold" width="1em" height="1em"
                             fill="currentColor" aria-hidden="true">
                            <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z">
                            </path>
                        </svg>
                    </i>
                    <div className="antd-pro-components-global-header-index-right">
                        <span className="antd-pro-components-global-header-index-action antd-pro-components-global-header-index-account ant-dropdown-trigger">
                            <span className="ant-avatar antd-pro-components-global-header-index-avatar ant-avatar-sm ant-avatar-circle ant-avatar-image">
                                <img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="avatar"/>
                            </span>
                            <span className="antd-pro-components-global-header-index-name">Serati Ma</span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Top;