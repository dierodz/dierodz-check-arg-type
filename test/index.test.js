const req = require('../helper/req')
const { assert } = require('chai')

const CheckArgType = req('index')
const ArgTypes = req('ArgTypes')

/* eslint-disable no-undef */

describe('Check', () => {
  it('Devuelve un error si no le paso un argumento', () => {
    assert.throw(() => { return new CheckArgType() }, TypeError)
  })
  it('Devuelve un error si se pasa un argumento invalido', () => {
    assert.throw(() => { return new CheckArgType([]) }, TypeError)
  })
  it('Devuelve una funcion', () => {
    const isString = new CheckArgType(ArgTypes.string)
    assert.isFunction(isString)
  })
  describe('Chequear un [Number]', () => {
    const isNumber = new CheckArgType(ArgTypes.number)

    it('Retorna [true] si le envio un number como argumento', () => {
      assert.isTrue(isNumber(0))
    })
    it('Retorna [false] si le envio un array como argumento', () => {
      assert.isFalse(isNumber([]))
    })
  })
})
