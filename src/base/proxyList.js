const api = "http://api.douban.com/";
module.exports = {
    '/api': {
        target: api,
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }
}
