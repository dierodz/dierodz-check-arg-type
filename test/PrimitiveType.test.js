const { assert } = require('chai')
const req = require('../helper/req')

const PrimitiveType = req('PrimitiveType')

/* eslint-disable no-undef */

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
  describe('Chequear un [Function]', () => {
    const isFunction = new PrimitiveType('function')

    it('Retorna [true] si le envio una function como argumento', () => {
      assert.isTrue(isFunction.test(() => ';-)'))
    })
    it('Retorna [false] si le envio un null como argumento', () => {
      assert.isFalse(isFunction.test(null))
    })
    it('Retorna [false] si no envio ningun argumento', () => {
      assert.isFalse(isFunction.test())
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
  describe('Chequear un [Object]', () => {
    const isObject = new PrimitiveType('object')

    it('Retorna [true] si le envio un object como argumento', () => {
      assert.isTrue(isObject.test({ test: 'test' }))
    })
    it('Retorna [false] si le envio un number como argumento', () => {
      assert.isFalse(isObject.test(0))
    })
    it('Retorna [false] si no envio ningun argumento', () => {
      assert.isFalse(isObject.test())
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
