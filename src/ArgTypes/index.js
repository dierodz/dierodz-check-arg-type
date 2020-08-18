const PrimitiveType = require('../PrimitiveType')

const ArgTypes = {
  boolean: PrimitiveType.bind(null, 'boolean'),
  number: PrimitiveType.bind(null, 'number'),
  object: PrimitiveType.bind(null, 'object'),
  string: PrimitiveType.bind(null, 'string')
}

module.exports = ArgTypes
