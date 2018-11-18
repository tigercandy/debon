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
}

export default Product;