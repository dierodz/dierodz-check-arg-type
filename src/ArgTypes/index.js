const PrimitiveType = require('../PrimitiveType')

const ArgTypes = {
  boolean: PrimitiveType.bind(null, 'boolean'),
  function: PrimitiveType.bind(null, 'function'),
  number: PrimitiveType.bind(null, 'number'),
  object: PrimitiveType.bind(null, 'object'),
  string: PrimitiveType.bind(null, 'string')
}

module.exports = ArgTypes
