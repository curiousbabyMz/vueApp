// const api = "https://api.douban.com/v2/movie/";
const api = "http://api.apiopen.top/";

module.exports = {
    proxyList: {
        '/api': {
            target: api,
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
}