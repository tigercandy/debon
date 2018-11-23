import React from 'react';
import {Icon} from 'antd';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ant-row debon-row">
                <div className="ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 debon-col-12-24">
                    <div className="ant-card debon-card-user">
                        <div className="ant-card-body debon-card-body">
                            <div className="antd-pro-components-charts-chart-card-index-chartCard">
                                <div className="antd-pro-components-charts-chart-card-index-chartTop">
                                    <div className="antd-pro-components-charts-chart-card-index-avatar"></div>
                                    <div className="antd-pro-components-charts-chart-card-index-metaWrap">
                                        <div className="antd-pro-components-charts-chart-card-index-meta debon-text-white">
                                            <span>
                                                <span>总销售额</span>
                                            </span>
                                            <span className="antd-pro-components-charts-chart-card-index-action">
                                                <i className="anticon anticon-info-circle-o">
                                                    <svg viewBox="64 64 896 896" className="" data-icon="info-circle"
                                                         width="1em" height="1em" fill="currentColor"
                                                         aria-hidden="true">
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                                        <path
                                                            d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM536 448h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                                                    </svg>
                                                </i>
                                            </span>
                                        </div>
                                        <div className="antd-pro-components-charts-chart-card-index-total debon-text-white">
                                            <span>¥ 126,560</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="antd-pro-components-charts-chart-card-index-content debon-charts-chart-card-index-content debon-text-white">
                                    <div className="antd-pro-components-charts-chart-card-index-contentFixed">
                                        <Icon type="user" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 debon-col-12-24">
                    <div className="ant-card debon-article-card">
                        <div className="ant-card-body debon-card-body">
                            <div className="antd-pro-components-charts-chart-card-index-chartCard">
                                <div className="antd-pro-components-charts-chart-card-index-chartTop">
                                    <div className="antd-pro-components-charts-chart-card-index-avatar"></div>
                                    <div className="antd-pro-components-charts-chart-card-index-metaWrap">
                                        <div className="antd-pro-components-charts-chart-card-index-meta debon-text-white">
                                            <span>
                                                <span>访问量</span>
                                            </span>
                                            <span className="antd-pro-components-charts-chart-card-index-action">
                                                <i className="anticon anticon-info-circle-o">
                                                    <svg viewBox="64 64 896 896" className="" data-icon="info-circle"
                                                         width="1em" height="1em" fill="currentColor"
                                                         aria-hidden="true">
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                                                        d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM536 448h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                                                    </svg>
                                                </i>
                                            </span>
                                        </div>
                                        <div className="antd-pro-components-charts-chart-card-index-total debon-text-white">8,846</div>
                                    </div>
                                </div>
                                <div
                                    className="antd-pro-components-charts-chart-card-index-content debon-charts-chart-card-index-content">
                                    <div className="antd-pro-components-charts-chart-card-index-contentFixed">
                                        <div>
                                            <div
                                                className="antd-pro-components-charts-index-miniChart debon-charts-index-miniChart">
                                                <div className="antd-pro-components-charts-index-chartContent">
                                                    <div>
                                                        <div>
                                                            <span className="span-display-none"></span>
                                                            <div className="debon-index-statistic">
                                                                <canvas className="debon-index-pv-canvas" id="canvas_49"
                                                                        width="696" height="200"></canvas>
                                                                <div className="g2-tooltip debon-tooltip">
                                                                    <div className="g2-tooltip-title"></div>
                                                                    <ul className="g2-tooltip-list debon-tooltip-list">
                                                                        <li data-index="0">
                                                                            <span
                                                                                className="g2-tooltip-marker debon-tooltip-marker"></span>
                                                                            2018-11-26
                                                                            <span
                                                                                className="g2-tooltip-value debon-tooltip-value">
                                                                                7
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 debon-col-12-24">
                    <div className="ant-card debon-cate-card">
                        <div className="ant-card-body debon-card-body">
                            <div className="antd-pro-components-charts-chart-card-index-chartCard">
                                <div className="antd-pro-components-charts-chart-card-index-chartTop">
                                    <div className="antd-pro-components-charts-chart-card-index-avatar"></div>
                                    <div className="antd-pro-components-charts-chart-card-index-metaWrap">
                                        <div className="antd-pro-components-charts-chart-card-index-meta debon-text-white">
                                            <span><span>支付笔数</span></span><span
                                            className="antd-pro-components-charts-chart-card-index-action"><i
                                            className="anticon anticon-info-circle-o"><svg
                                            viewBox="64 64 896 896" className="" data-icon="info-circle"
                                            width="1em" height="1em" fill="currentColor" aria-hidden="true"><path
                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                                            d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM536 448h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg></i></span>
                                        </div>
                                        <div
                                            className="antd-pro-components-charts-chart-card-index-total debon-text-white">6,560
                                        </div>
                                    </div>
                                </div>
                                <div className="antd-pro-components-charts-chart-card-index-content debon-charts-chart-card-index-content">
                                    <div className="antd-pro-components-charts-chart-card-index-contentFixed">
                                        <div>
                                            <div className="antd-pro-components-charts-index-miniChart debon-charts-index-miniChart">
                                                <div className="antd-pro-components-charts-index-chartContent">
                                                    <div>
                                                        <div>
                                                            <div className="debon-index-statistic">
                                                                <canvas className="debon-index-pv-canvas" id="canvas_50"
                                                                        width="696" height="200"></canvas>
                                                                <div className="g2-tooltip debon-tooltip">
                                                                    <div className="g2-tooltip-title"></div>
                                                                    <ul className="g2-tooltip-list debon-tooltip-list">
                                                                        <li data-index="0">
                                                                            <span
                                                                                className="g2-tooltip-marker debon-tooltip-marker-2"></span>2018-11-30
                                                                            <span
                                                                                className="g2-tooltip-value debon-tooltip-value">9</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 debon-col-12-24">
                    <div className="ant-card debon-tag-card">
                        <div className="ant-card-body debon-card-body">
                            <div className="antd-pro-components-charts-chart-card-index-chartCard">
                                <div className="antd-pro-components-charts-chart-card-index-chartTop">
                                    <div className="antd-pro-components-charts-chart-card-index-avatar"></div>
                                    <div className="antd-pro-components-charts-chart-card-index-metaWrap">
                                        <div className="antd-pro-components-charts-chart-card-index-meta debon-text-white">
                                            <span><span>运营活动效果</span></span><span
                                            className="antd-pro-components-charts-chart-card-index-action"><i
                                            className="anticon anticon-info-circle-o"><svg
                                            viewBox="64 64 896 896" className="" data-icon="info-circle"
                                            width="1em" height="1em" fill="currentColor" aria-hidden="true"><path
                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                                            d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM536 448h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg></i></span>
                                        </div>
                                        <div className="antd-pro-components-charts-chart-card-index-total debon-text-white">78%
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="antd-pro-components-charts-chart-card-index-content debon-charts-index-miniChart">
                                    <div className="antd-pro-components-charts-chart-card-index-contentFixed">
                                        <div
                                            className="antd-pro-components-charts-mini-progress-index-miniProgress">
                                            <div
                                                className="antd-pro-components-charts-mini-progress-index-target debon-charts-mini-progress-index-target">
                                                <span></span>
                                                <span></span>
                                            </div>
                                            <div
                                                className="antd-pro-components-charts-mini-progress-index-progressWrap">
                                                <div className="antd-pro-components-charts-mini-progress-index-progress debon-charts-mini-progress-index-progress"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;