import React from 'react';

class TableList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLoading: true
        }
    }

    componentWillReceiveProps() {
        this.setState({
            firstLoading: false
        })
    }

    render() {
        let tableHeader = this.props.tableHeaders.map((tableHead, index) => {
            let headType = typeof tableHead;
            if (headType === 'object') {
                return <th key={index} width={tableHead.width}>{tableHead.name}</th>
            } else if (headType === 'string') {
                return <th key={index}>{tableHead}</th>
            }
        });
        let list = this.props.children;

        let listNull = (
            <tr>
                <td colSpan={this.props.tableHeaders.length}
                    className="text-center">{this.state.firstLoading ? "加载中..." : "没有相关数据!"}</td>
            </tr>
        );

        let tableData = list.length > 0 ? list : listNull;

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="table-responsive">
                                <div className="dataTables_wrapper form-inline"
                                     role="grid">
                                    <table
                                        className="table table-striped table-bordered table-hover dataTable no-footer">
                                        <thead>
                                        <tr role="row">
                                            {tableHeader}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {tableData}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TableList;