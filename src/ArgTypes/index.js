const PrimitiveType = require('../PrimitiveType')

const ArgTypes = {
  boolean: PrimitiveType.bind(null, 'boolean'),
  number: PrimitiveType.bind(null, 'number'),
  string: PrimitiveType.bind(null, 'string')
}

module.exports = ArgTypes
