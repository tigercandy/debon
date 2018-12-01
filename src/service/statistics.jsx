import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Statistics {
    getDashboardCount() {
        return _mm.request({
            type: 'GET',
            url: '/api/statistics?token=' + _mm.getStorage('auth_info').token,
        })
    }
}

export default Statistics;