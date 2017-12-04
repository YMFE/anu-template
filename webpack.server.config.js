require('babel-register')
require('babel-polyfill')
const webpack = require('webpack')
const path = require('path')
const alias = require('./webpack/alias')

const Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin');
const webpack_isomorphic_tools_plugin =
new Webpack_isomorphic_tools_plugin(require('./webpack-isomorphic-tools-configuration')).development()

module.exports = {
  // context: 如果不通过path.resolve 配置入口访问路径 watch: true失效
  context: path.resolve('./server'),

  entry: {
    index: './app.js',
    public: ['anujs', 'react-router']
  },

  output: {
    filename: '[name].js',
    // 包存放的目录
    path: path.resolve('./dist'),
    chunkFilename: '[name].[chunkhash:5].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-3', 'react']
          }              
        }
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings 
        }, {
            loader: "css-loader" // translates CSS into CommonJS 
        }, {
            loader: "sass-loader" // compiles Sass to CSS 
        }]
      },
      {
        test: /\.bundle\.js$/, // 通过文件名后缀自动处理需要转成bundle的文件
        exclude: /node_modules/,
        use: [{
          loader: 'bundle-loader',
          options: {
            name: 'app-[name]',
            lazy: true
          }
        }, {
          loader: 'babel-loader',
        }]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // 公共模块名称 有多个 使用数组
      // 匹配entry 入口文件名 相同的单独打包 其他模块统一抽取公共代码到commons.js中
      // css文件默认打包到一个公共CSS里 common.css
      // 公共文件也必须在在这里打包 否则公共文件会出现在其他文件里
      names: ['commons', 'public']
    }),

    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(__dirname + '/'),
      ARRAY: JSON.stringify([1, 2, 3])
    }),

    webpack_isomorphic_tools_plugin,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  resolve: {
     alias,
  },
}

