import React from 'react';

import MUtil from 'util/mm.jsx';
import Product from 'service/product.jsx';
import PageHeader from 'component/page-header/index.jsx';
import CategorySelector from 'page/product/index/category-selector.jsx';

import './index.scss';

const _mm = new MUtil();
const _product = new Product();

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.product_id,
            name: '',
            subtitle: '',
            categoryId: 0,
            parentCategoryId: 0,
            subImages: [],
            price: '',
            stock: '',
            detail: '',
            status: 1,
        }
    }

    componentDidMount() {
        this.loadProduct();
    }

    loadProduct() {
        if (this.state.id) {
            _product.getProduct(this.state.id).then((res) => {
                let images = res.subImages.split(',');
                res.subImages = images.map((img) => {
                    return {
                        uri: img,
                        url: res.imageHost + res.mainImage
                    }
                });
                this.setState(res);
            }, (errMsg) => {
                _mm.errorTips(errMsg);
            });
        }
    }

    getSubImagesString() {
        return this.state.subImages.map((image) => image.uri).join(',');
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageHeader title="添加商品"/>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="container">
                            <div role="form">
                                <div className="form-group input-group">
                                    <span className="input-group-addon">商品名称 </span>
                                    <input type="text" className="form-control" placeholder="商品名" name="name" value={this.state.name} readOnly/>
                                </div>
                                <CategorySelector readOnly="true"
                                    categoryId={this.state.categoryId}
                                    parentCategoryId={this.state.parentCategoryId}/>
                                <div className="form-group input-group">
                                    <span className="input-group-addon">商品价格 </span>
                                    <input type="text" className="form-control" placeholder="价格" name="price" value={this.state.price} readOnly/>
                                    <span className="input-group-addon">元</span>
                                </div>
                                <div className="form-group input-group">
                                    <span className="input-group-addon">商品库存 </span>
                                    <input type="text" className="form-control" placeholder="库存" name="stock" value={this.state.stock} readOnly/>
                                    <span className="input-group-addon">件/个</span>
                                </div>
                                <div className="form-group input-group">
                                    <span className="input-group-addon">商品简介 </span>
                                    <textarea className="form-control" rows="3" name="subtitle" value={this.state.subtitle} readOnly></textarea>
                                </div>
                                <div className="form-group input-group">
                                    <span className="input-group-addon">商品图片</span>
                                    {
                                        this.state.subImages.length ? this.state.subImages.map(
                                            (image, index) => (
                                                <div className="product-img" key={index}><img src={image.url}/>
                                                </div>)
                                        ) : (<input type="text" className="form-control" value="暂无图片" readOnly/>)
                                    }
                                </div>
                                <div className="form-group input-group">
                                    <span className="input-group-addon">商品描述 </span>
                                    <div className="detail-content" dangerouslySetInnerHTML={{__html:this.state.detail}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;