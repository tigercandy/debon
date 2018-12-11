import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Article {
    // save article
    saveArticle(data) {
        return _mm.request({
            type: 'POST',
            url: '/api/article/save',
            data: data
        })
    }

    // get article list
    getList(params) {
        return _mm.request({
            type: 'get',
            url: '/api/article/list',
            data: data,
        })
    }
}

export default Article;