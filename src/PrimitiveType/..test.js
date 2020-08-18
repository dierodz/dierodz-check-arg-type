const PrimitiveType = require('.')

/* eslint-disable no-undef */

describe('PrimitiveType', () => {
  it('Devuelve un error si no le paso un argumento', () => {
    expect(() => { return new PrimitiveType() }).toThrow(TypeError)
  })
  it('Devuelve un error si se pasa un argumento invalido', () => {
    expect(() => { return new PrimitiveType([]) }).toThrow(TypeError)
  })
  it('Devuelve una funcion', () => {
    const isString = new PrimitiveType('string')
    expect(typeof isString.test === 'function').toBe(true)
  })
  describe('Chequear un [Boolean]', () => {
    const isBoolean = new PrimitiveType('boolean')

    it('Retorna [true] si le envio un boolean como argumento', () => {
      expect(isBoolean.test(false)).toBe(true)
    })
    it('Retorna [false] si le envio un null como argumento', () => {
      expect(isBoolean.test(null)).toBe(false)
    })
    it('Retorna [false] si no envio ningun argumento', () => {
      expect(isBoolean.test()).toBe(false)
    })
  })
  describe('Chequear un [Number]', () => {
    const isNumber = new PrimitiveType('number')

    it('Retorna [true] si le envio un number como argumento', () => {
      expect(isNumber.test(0)).toBe(true)
    })
    it('Retorna [false] si le envio un array como argumento', () => {
      expect(isNumber.test([])).toBe(false)
    })
    it('Retorna [false] si no envio ningun argumento', () => {
      expect(isNumber.test()).toBe(false)
    })
  })
  describe('Chequear un [String]', () => {
    const isString = new PrimitiveType('string')

    it('Retorna [true] si le envio un string como argumento', () => {
      expect(isString.test('test')).toBe(true)
    })
    it('Retorna [false] si le envio un number como argumento', () => {
      expect(isString.test(0)).toBe(false)
    })
    it('Retorna [false] si no envio ningun argumento', () => {
      expect(isString.test()).toBe(false)
    })
  })
})
