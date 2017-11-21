module.exports = {
  path: 'Demo1',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Demo1.jsx').default)
    }, 'Demo1')
  }
}