/* eslint-disable no-undef */

const PrimitiveType = require('../src/PrimitiveType')
const { assert } = require('chai')

describe('PrimitiveType', () => {
  it('Devuelve un error si no le paso un argumento', () => {
    assert.throws(() => { return new PrimitiveType() }, TypeError)
  })
  it('Devuelve un error si se pasa un argumento invalido', () => {
    assert.throws(() => { return new PrimitiveType([]) }, TypeError)
  })
  it('Devuelve una funcion', () => {
    const isString = new PrimitiveType('string')
    assert.isFunction(isString.test)
  })
  describe('Chequear un [Boolean]', () => {
    const isBoolean = new PrimitiveType('boolean')

    it('Retorna [true] si le envio un boolean como argumento', () => {
      assert.isTrue(isBoolean.test(false))
    })
    it('Retorna [false] si le envio un null como argumento', () => {
      assert.isFalse(isBoolean.test(null))
    })
    it('Retorna [false] si no envio ningun argumento', () => {
      assert.isFalse(isBoolean.test())
    })
  })
  describe('Chequear un [Number]', () => {
    const isNumber = new PrimitiveType('number')

    it('Retorna [true] si le envio un number como argumento', () => {
      assert.isTrue(isNumber.test(0))
    })
    it('Retorna [false] si le envio un array como argumento', () => {
      assert.isFalse(isNumber.test([]))
    })
    it('Retorna [false] si no envio ningun argumento', () => {
      assert.isFalse(isNumber.test())
    })
  })
  describe('Chequear un [String]', () => {
    const isString = new PrimitiveType('string')

    it('Retorna [true] si le envio un string como argumento', () => {
      assert.isTrue(isString.test('test'))
    })
    it('Retorna [false] si le envio un number como argumento', () => {
      assert.isFalse(isString.test(0))
    })
    it('Retorna [false] si no envio ningun argumento', () => {
      assert.isFalse(isString.test())
    })
  })
})
