import React from 'react';

class ListSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchType: 'productName',
            searchKeyword: ''
        }
    }

    onSearchTypeChange(e) {

    }

    onValueChange(e) {
        let name = e.target.name,
            value = e.target.value.trim();

        this.setState({
            [name]: value
        });
    }

    onSearch() {
        this.props.onSearch(this.state.searchType, this.state.searchKeyword);
    }

    onSearchKeyWorkKeyUp(e) {
        // 13 => Enter key
        if (e.keyCode === 13) {
            this.onSearch();
        }
    }

    render() {
        return (
                <div className="col-md-6 search-wrapper">
                    <div className="form-inline">
                        <div className="form-group">
                            <select className="form-control" name="searchType"
                                    onChange={(e) => this.onValueChange(e)}>
                                <option value="productName">按商品名称查询</option>
                                <option value="productId">按商品ID查询</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input typeof="text" name="searchKeyword" className="form-control"
                                   onChange={(e) => this.onValueChange(e)}
                                   onKeyUp={(e) => this.onSearchKeyWorkKeyUp(e)}/>
                        </div>
                        <button className="btn btn-success" onClick={(e) => this.onSearch()}><i
                            className="fa fa-search"></i> 查询
                        </button>
                    </div>
                </div>
        );
    }
}

export default ListSearch;