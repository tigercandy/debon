import React from 'react';

import PageHeader from 'component/page-header/index.jsx';

class Error extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-danger">
                            <strong>出错啦!</strong>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error;