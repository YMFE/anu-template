module.exports = {
  path: 'Demo2',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Demo2.jsx').default)
    }, 'Demo2')
  }
}