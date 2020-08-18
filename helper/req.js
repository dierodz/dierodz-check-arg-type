function req (path) {
  return require(`../${process.env.BABEL_ENV === 'production' ? 'lib' : 'src'}/${path}`)
}

module.exports = req
