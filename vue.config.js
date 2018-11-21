const path = require('path')

// 拼接路径
function resolve(dir) {
    return path.join(__dirname, dir)
}

// 基础路径 注意发布之前要先修改这里
let baseUrl = '/'

module.exports = {
    baseUrl: baseUrl, // 根据你的实际情况更改这里
    lintOnSave: true,
    devServer: {
        publicPath: baseUrl, // 和 baseUrl 保持一致
        proxy: {
            '/': {
                target:
                    ' https://www.easy-mock.com/mock/5bebbb53e0c6d321cade7390/yxmall',
                ws: true,
                changeOrigin: true
            }
        }
    },
    // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
    chainWebpack: config => {
        // svg
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule.include
            .add(resolve('src/assets/svg'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
        // image exclude
        const imagesRule = config.module.rule('images')
        imagesRule
            .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
            .exclude.add(resolve('src/assets/svg'))
            .end()
    }
}
