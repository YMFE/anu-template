const webpack = require('webpack')
const path = require('path')
const ip = require('ip')
const portfinder = require('portfinder')
// 通过portfinder获取可用端口
const port = ()=>{portfinder.getPort(function (err,port) {return port})};
module.exports = {
  // context: 如果不通过path.resolve 配置入口访问路径 watch: true失效
  context: path.resolve('./client'),

  entry: {
    index: './src/client.js',
    public: ['anujs', 'react-router']
  },

  output: {
    filename: '[name].js',
    // 包存放的目录
    path: path.resolve('./dist'),
    chunkFilename: '[name].[chunkhash:5].chunk.js',
  },
  // target: 'node',
  // externals: [nodeExternals()],
  // 服务器地址默认访问的文件路径
  devServer: {
    host:ip.address(),
    port:port(),
    contentBase: './client'
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

    new webpack.optimize.UglifyJsPlugin({
      // beautify
      //  true: 美化代码输出
      //  false: 压缩代码 会删除部分注释 
      beautify: false,
      // comments
      //  true: 保留所有注释
      //  false: 删除所有注释
      comments: false
    }),
  ],

  resolve: {
    alias: {
      'react': 'qreact/dist/ReactIE',
      'react-dom': 'qreact',
      // 若要兼容 IE 请使用以下配置
      'ReactIE': 'qreact/dist/ReactIE',
      'react-dom': 'qreact/dist/ReactIE',
      'ReactDOMServer': 'qreact/dist/ReactDOMServer',
      // 'redux': 'anujs/lib/ReduxIE',//这主要用于IE6－8，因为官方源码中的isPlainObject方法性能超差
      // 如果引用了 prop-types 或 create-react-class
      // 需要添加如下别名
      // 'prop-types': 'anujs/lib/ReactPropTypes',
      // 'create-react-class': 'anujs/lib/createClass'
      //如果你在移动端用到了onTouchTap事件
      // 'react-tap-event-plugin': 'anujs/lib/injectTapEventPlugin',
    }
  },
}
