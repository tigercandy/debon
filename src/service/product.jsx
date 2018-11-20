import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Product {
    getProductList(params) {
        let url = '',
            data = {};

        if (params.listType === 'list') {
            url = '/manage/product/list.do';
            data.pageNum = params.pageNum;
        } else if (params.listType === 'search') {
            url = '/manage/product/search.do';
            data.pageNum = params.pageNum;
            data[params.searchType] = params.keyword;
        }

        return _mm.request({
            type: 'POST',
            url: url,
            data: data
        });
    }

    setProductStatus(data) {
        return _mm.request({
            type: 'POST',
            url: '/manage/product/set_sale_status.do',
            data: data
        });
    }

    getCategoryList(parentId) {
        return _mm.request({
            type: 'POST',
            url: '/manage/category/get_category.do',
            data: {
                categoryId: parentId || 0,
            }
        });
    }

    checkProduct(product) {
        let result = {
            status: true,
            msg: 'ok',
        };
        if (typeof product.name !== 'string' || product.name.length === 0) {
            return {
                status: false,
                msg: '商品名称不能为空'
            }
        }
        if (typeof product.price !== 'number' || !(product.price >= 0)) {
            return {
                status: false,
                msg: '商品价格填写错误'
            }
        }
        if (typeof product.stock !== 'number' || !(product.stock >= 0)) {
            return {
                status: false,
                msg: '库存填写错误'
            }
        }
        if (typeof product.subtitle !== 'string' || product.subtitle.length === 0) {
            return {
                status: false,
                msg: '商品简介不能为空'
            }
        }
        if (typeof product.categoryId !== 'number' || !(product.categoryId > 0)) {
            return {
                status: false,
                msg: '请选择商品分类'
            }
        }

        return result;
    }

    saveProduct(product) {
        return _mm.request({
            type: 'POST',
            url: '/manage/product/save.do',
            data: product
        });
    }

    getProduct(id) {
        return _mm.request({
            type: 'POST',
            url: '/manage/product/detail.do',
            data: {
                productId: id || 0
            }
        });
    }
}

export default Product;