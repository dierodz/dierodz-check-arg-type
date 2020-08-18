module.exports = {
  all: true,
  include: [
    'src/**/*.js'
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
