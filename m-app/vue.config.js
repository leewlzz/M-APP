module.exports = {
    devServer: {
        proxy: {
            '/v1' : {
                target: 'https://m.mi.com',
                changeOrigin: true
            }
        }
    }
}