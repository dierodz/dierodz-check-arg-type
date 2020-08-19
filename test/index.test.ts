/* eslint-disable no-undef */

import { assert } from 'chai'
// import CheckArgType from '../../lib'
const CheckArgType = process.env.TEST_ENV === 'lib' ? require('../lib') : require('../src')

describe('Check', () => {
  it('Devuelve una funcion', () => {
    const isString = CheckArgType.default(CheckArgType.default.ArgType.string)
    assert.isFunction(isString)
  })

  check('number', 0, 'test')
  check('string', 'test', null)
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function check(type: 'number' | 'string', argTrue: any, argFalse: any): void {
  describe(`Chequear un argumento de tipo [${type}]`, () => {
    const test = CheckArgType.default(CheckArgType.default.ArgType[type])

    it('Retorna [true] si le envio un argumento que coincida con el tipo', () => {
      assert.isTrue(test(argTrue))
    })
    it('Retorna [false] si le envio un argumento que no coincida con el tipo', () => {
      assert.isFalse(test(argFalse))
    })
  })
}
