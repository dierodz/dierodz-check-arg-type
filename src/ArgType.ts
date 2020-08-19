import ArgTypeType from './ArgTypeType'
import TestType from './TestType'

function primitive(type: string): TestType {
  return (value) => typeof value === type
}

const ArgType: ArgTypeType = {
  boolean: primitive('boolean'),
  function: primitive('function'),
  number: primitive('number'),
  object: primitive('object'),
  string: primitive('string')
}

export default ArgType
