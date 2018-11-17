import React from 'react';

class PageHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        document.title = this.props.title + ' - DEBON';
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h5 className="page-header">{this.props.title}</h5>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default PageHeader;