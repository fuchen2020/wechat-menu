const mix = require('laravel-mix')
const webpack = require('webpack')
const path = require('path')

// 修改生成 mix-manifest.json 文件的位置
Mix.manifest.refresh = function() {
    Mix.inProduction()
    && File.find(path.join('resources', this.name))
        .makeDirectories()
        .write(this.manifest)
}

const target = Mix.inProduction() ? 'public' : 'public-dev'

mix
    .options({
        uglify: {
            uglifyOptions: {
                compress: {
                    drop_console: true,
                },
            },
        },
    })
    .setPublicPath(target)
    .js('resources/js/app.js', target)
    .sass('resources/sass/app.scss', target)
    .copy(target, '../test_wechat_menu/public/vendor/wechat-menu')
    .version()
    .webpackConfig({
        resolve: {
            symlinks: false,
            alias: {
                '@': path.resolve(__dirname, 'resources/js/'),
            },
        },
        plugins: [
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        ],
    })
