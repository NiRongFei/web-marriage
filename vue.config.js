const path = require('path');

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  publicPath: process.env.BASE_URL, // 部署基础路径, History路由和多页面时必须使用绝对路径!
  outputDir: 'dist', // 构建文件目录, 添加--no-clean可避免构建时文件被清除!
  assetsDir: 'static', // 静态资源目录
  indexPath: 'index.html', // Html输出路径
  filenameHashing: true, // 是否开启文件名哈希
  lintOnSave: false, // 是否开启编译提示
  runtimeCompiler: false, // 是否使用运行时编译版本, 应用体积会增加10kb左右!
  transpileDependencies: ['swiper'], // 添加Babel显式转义
  productionSourceMap: false, // 是否开启生产环境SourceMap
  // crossorigin: undefined,// 设置标签crossorigin属性
  integrity: false, // 是否启用标签Subresource Integrity
  configureWebpack: (config) => {
    config.externals = {
      BMap: 'BMap',
    };
  },
  chainWebpack: (config) => {
    // 修复热更新
    config.resolve.symlinks(true);
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@ast', resolve('src/assets'))
      .set('@cpt', resolve('src/components'));
    // 网站标题
    config.plugin('html').tap((args) => {
      args[0].title = '南京市婚姻公共服务平台';
      return args;
    });
    // 图片压缩
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        disable: true,
        gifsicle: { interlaced: false },
        mozjpeg: { progressive: true, quality: 75 },
        optipng: { enabled: false },
        pngquant: { quality: '75-90', speed: 4 },
        webp: { quality: 75 },
      });
  },
  css: {
    requireModuleExtension: true, // 是否开启CSS Module后缀
    // extract: true, // 是否提取CSS, 不兼容CSS热重载开发环境下关闭!
    sourceMap: false, // 是否开启CSS SourceMap, 开启后会影响构建性能!
    loaderOptions: {
      sass: {
        data: `@import "~@/styles/mixin.scss";`,
      },
    },
  },
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      '/base-api': {
        target: 'https://129.28.103.85:8443',
        ws: true,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/base-api': '',
        },
      },
    },
  },
  parallel: require('os').cpus().length > 1, // 多核时自动启用
  pluginOptions: {}, // 第三方插件配置
  pwa: {}, // PWA插件配置
};
