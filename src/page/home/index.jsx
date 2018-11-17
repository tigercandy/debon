import React from 'react';

import PageHeader from 'component/page-header/index.jsx';
import './index.css';

class Home extends React.Component {
    render() {
        return (
            <div id="page-wrapper">
                <PageHeader title="控制台"/>
                <div className="row">
                    <div className="col-md-12"></div>
                </div>
            </div>
        );
    }
}

export default Home;