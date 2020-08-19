import ArgType from './ArgType'
import Checker from './Checker'
import TestType from './TestType'

function CheckArgType(type: TestType): TestType {
  const checker = new Checker(type)
  return checker.test
}

CheckArgType.ArgType = ArgType

export default CheckArgType
