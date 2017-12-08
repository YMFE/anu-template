const config = require('./react_config.js')
const React = config.React
const Template = function () {
  return (
    <div>
      <h1>欢迎使用 Qreact</h1>
      <p>Author: 司徒正美 / QQ群: 370262116</p>
      <ol>
        <li>特点：</li>
        <li>支持React的无狀态组件，纯组件，高阶组件，受控组件与非受控组件，</li>
        <li>命名空间就是React，此外还暴露了另一个别名ReactDOM在window上</li>
        <li>体积足够少(2000行相对于react+react-dom的3万行, gz为其1/5大小)</li>
        <li>性能是官方React的两倍以上 测试页面、 结果统计</li>
        <li>生命周期函数的参数与官方保持一致</li>
        <li>直接与react-redux, react-router-dom, react-router-redux混用</li>
        <li>支持后端渲染</li>
        <li>支持官方的chrome DevTools</li>
      </ol>
    </div>
  )
}

module.exports = Template()






