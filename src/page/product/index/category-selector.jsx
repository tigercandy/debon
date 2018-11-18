import React from 'react';

import MUtil from 'util/mm.jsx';
import Product from "service/product.jsx";

const _mm = new MUtil();
const _product = new Product();

class CategorySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstCategoryList: [],
            firstCategoryId: 0,
            secondCategoryList: [],
            secondCategoryId: 0,
        }
    }

    componentDidMount() {
        this.loadFirstCategory();
    }

    loadFirstCategory() {
        _product.getCategoryList().then(res => {
            this.setState({
                firstCategoryList: res
            }, errMsg => {
                _mm.errorTips(errMsg);
            })
        });
    }

    loadSecondCategory() {
        _product.getCategoryList(this.state.firstCategoryId).then(res => {
            this.setState({
                secondCategoryList: res
            }, errMsg => {
                _mm.errorTips(errMsg);
            })
        });
    }

    onFirstCategoryChange(e) {
        let firstCategoryId = e.target.value || 0;
        this.setState({
            firstCategoryId: firstCategoryId,
            secondCategoryId: 0,
            secondCategoryList: [],
        }, () => {
            this.loadSecondCategory();
            this.onPropsCategoryChange();
        })
    }

    onSecondCategoryChange(e) {
        let secondCategoryId = e.target.value || 0;
        this.setState({
            secondCategoryId: secondCategoryId,
        }, () => {
            this.onPropsCategoryChange();
        })
    }

    onPropsCategoryChange() {
        let categoryChangeable = typeof this.props.onCategoryChange == 'function';
        if (this.state.secondCategoryId) {
            categoryChangeable && this.props.onCategoryChange(this.state.secondCategoryId, this.state.firstCategoryId);
        } else {
            categoryChangeable && this.props.onCategoryChange(this.state.firstCategoryId, 0);
        }
    }

    render() {
        return (
            <div>
                <div className="form-group input-group">
                    <span className="input-group-addon">一级分类 </span>
                    <select className="form-control" onChange={(e) => this.onFirstCategoryChange(e)}>
                        <option>请选择一级分类</option>
                        {
                            this.state.firstCategoryList.map((category, index) =>
                                <option value={category.id} key={index}>{category.name}</option>
                            )
                        }
                    </select>
                </div>
                {
                    this.state.secondCategoryList.length ? (
                        <div className="form-group input-group">
                            <span className="input-group-addon">二级分类 </span>
                            <select className="form-control" onChange={(e) => this.onSecondCategoryChange(e)}>
                                <option>请选择二级分类</option>
                                {
                                    this.state.secondCategoryList.map((category, index) =>
                                        <option value={category.id} key={index}>{category.name}</option>
                                    )
                                }
                            </select>
                        </div>
                    ) : null
                }

            </div>
        );
    }
}

export default CategorySelector;