module.exports = {
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