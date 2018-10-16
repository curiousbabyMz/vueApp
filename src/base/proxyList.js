const api = "http://api.apiopen.top/";
module.exports = {
    '/api': {
        target: api,
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }
}
