function generate () {
  return {
    all: true,
    include: [
      `${process.env.BABEL_ENV === 'production' ? 'lib' : 'src'}/**/*.js`,
      `${process.env.BABEL_ENV === 'production' ? 'lib' : 'src'}/**/*.ts`
    ],
    exclude: [
      '**/*.test.js'
    ],
    lines: 95,
    watermarks: {
      lines: [80, 95],
      functions: [80, 95],
      branches: [80, 95],
      statements: [80, 95]
    }
  }
}

module.exports = generate()
