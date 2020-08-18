const CheckArgType = require('.')
const { ArgTypes } = require('.')

/* eslint-disable no-undef */

describe('Check', () => {
  it('Devuelve un error si no le paso un argumento', () => {
    expect(() => { return new CheckArgType() }).toThrow(TypeError)
  })
  it('Devuelve un error si se pasa un argumento invalido', () => {
    expect(() => { return new CheckArgType([]) }).toThrow(TypeError)
  })
  it('Devuelve una funcion', () => {
    const isString = new CheckArgType(ArgTypes.string)
    expect(typeof isString === 'function').toBe(true)
  })
  describe('Chequear un [Number]', () => {
    const isNumber = new CheckArgType(ArgTypes.number)

    it('Retorna [true] si le envio un number como argumento', () => {
      expect(isNumber(0)).toBe(true)
    })
    it('Retorna [false] si le envio un array como argumento', () => {
      expect(isNumber([])).toBe(false)
    })
  })
})
