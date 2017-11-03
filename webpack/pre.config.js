const webpack = require('webpack')
const path = require('path')

module.exports = {
  // context: 如果不通过path.resolve 配置入口访问路径 watch: true失效
  context: path.resolve('./client'),
  entry: ['./src/client.js'],
  output: {
    path:path.resolve(__dirname,"../dist"),
    publicPath:"/assets/",
    filename:"bundle.js"
  },
  // 服务器地址默认访问的文件路径
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
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
      },
    ]
  },

  resolve: {
     alias: {
        'react': 'anujs',
        'react-dom': 'anujs',
          // 若要兼容 IE 请使用以下配置
          // 'react': 'anujs/dist/ReactIE',
          // 'react-dom': 'anujs/dist/ReactIE',
          // 'redux': 'anujs/lib/ReduxIE',//这主要用于IE6－8，因为官方源码中的isPlainObject方法性能超差
          // 如果引用了 prop-types 或 create-react-class
          // 需要添加如下别名
          'prop-types': 'anujs/lib/ReactPropTypes',
          // 'create-react-class': 'anujs/lib/createClass'
          //如果你在移动端用到了onTouchTap事件
          // 'react-tap-event-plugin': 'anujs/lib/injectTapEventPlugin',  
     }
  },
}

