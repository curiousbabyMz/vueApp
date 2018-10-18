const api = "http://api.douban.com/v2/movie/";
module.exports = {
    '/api': {
        target: api,
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }
}
