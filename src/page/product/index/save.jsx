import React from 'react';

import MUtil from 'util/mm.jsx';
import Product from 'service/product.jsx';
import Editor from 'util/editor/index.jsx';
import FileUploader from "util/upload/index.jsx";
import PageHeader from 'component/page-header/index.jsx';
import CategorySelector from 'page/product/index/category-selector.jsx';

import './index.scss';

const _mm = new MUtil();
const _product = new Product();

class ProductSave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    onCategoryChange(categoryId, parentCategoryId) {
        this.setState({
            categoryId: categoryId,
            parentCategoryId: parentCategoryId
        })
    }

    onValueChange(e) {
        let name = e.target.name,
            value = e.target.value.trim();
        this.setState({
            [name]: value
        })
    }

    getSubImagesString() {
        return this.state.subImages.map((image) => image.uri).join(',');
    }

    onSave(e) {
        let product = {
            name: this.state.name,
            subtitle: this.state.subtitle,
            categoryId: parseInt(this.state.categoryId),
            subImages: this.getSubImagesString(),
            detail: this.state.detail,
            price: parseFloat(this.state.price),
            stock: parseInt(this.state.stock),
            status: this.state.status
        };
        let productRes = _product.checkProduct(product);
        if (productRes.status) {
            _product.saveProduct(product).then((res) => {
                _mm.successTips(res);
                this.props.history.push('/product/index');
            }, (errMsg) => {
                _mm.errorTips(errMsg);
            });
        } else {
            _mm.errorTips(productRes.msg);
        }
    }

    onUploadSuccess(res) {
        let subImages = this.state.subImages;
        subImages.push(res);
        this.setState({
            subImages: subImages,
        });
    }

    onUploadError(err) {
        _mm.errorTips(err || '图片上传失败')
    }

    // remove images
    onImageRemove(e) {
        let index = parseInt(e.target.getAttribute('index')),
            subImages = this.state.subImages;
        subImages.splice(index, 1);
        this.setState({
            subImages: subImages
        })
    }

    // editor
    onEditorValueChange(value) {
        this.setState({
            detail: value
        })
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
                                    <input type="text" className="form-control" placeholder="商品名" name="name"
                                           onChange={(e) => this.onValueChange(e)}/>
                                </div>
                                <CategorySelector
                                    onCategoryChange={(categoryId, parentCategoryId) => this.onCategoryChange(categoryId, parentCategoryId)}/>
                                <div className="form-group input-group">
                                    <span className="input-group-addon">商品价格 </span>
                                    <input type="text" className="form-control" placeholder="价格" name="price"
                                           onChange={(e) => this.onValueChange(e)}/>
                                    <span className="input-group-addon">元</span>
                                </div>
                                <div className="form-group input-group">
                                    <span className="input-group-addon">商品库存 </span>
                                    <input type="text" className="form-control" placeholder="库存" name="stock"
                                           onChange={(e) => this.onValueChange(e)}/>
                                    <span className="input-group-addon">件/个</span>
                                </div>
                                <div className="form-group input-group">
                                    <span className="input-group-addon">商品简介 </span>
                                    <textarea className="form-control" rows="3" name="subtitle"
                                              onChange={(e) => this.onValueChange(e)}></textarea>
                                </div>
                                <div className="form-group input-group">
                                    <span className="input-group-addon">商品图片</span>
                                    {
                                        this.state.subImages.length ? this.state.subImages.map(
                                            (image, index) => (
                                                <div className="product-img" key={index}><img src={image.url}/>
                                                    <i title="删除图片" className="fa fa-close" index={index}
                                                       onClick={(e) => this.onImageRemove(e)}></i>
                                                </div>)
                                        ) : (<input type="text" className="form-control" value="请上传图片" readOnly/>)
                                    }
                                </div>
                                <FileUploader onSuccess={(res) => this.onUploadSuccess(res)}
                                              onError={(err) => this.onUploadError(err)}/>
                                <div className="form-group input-group">
                                    <span className="input-group-addon">商品描述 </span>
                                    <Editor onValueChange={(value) => this.onEditorValueChange(value)}/>
                                </div>
                                <button className="btn btn-success pull-right" onClick={(e) => {
                                    this.onSave(e)
                                }}><i className="glyphicon glyphicon-ok"></i> 确认提交
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductSave;