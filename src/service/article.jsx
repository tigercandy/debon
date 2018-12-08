import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Article {
    saveArticle(data) {
        return _mm.request({
            type: 'POST',
            url: '/api/article/save',
            data: data
        })
    }
}

export default Article;