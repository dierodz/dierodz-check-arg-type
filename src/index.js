class CheckArgType {
  constructor (TestType) {
    return new TestType().test
  }
}

CheckArgType.ArgTypes = require('./ArgTypes')

module.exports = CheckArgType
