const ArgTypes = require('.')
const PrimitiveType = require('../PrimitiveType')

describe('ArgTypes', () => {
  for (const arg in ArgTypes) {
    const Prop = new ArgTypes[arg](arg)
    it(`ArgTypes.${arg} es una instancia de [PrimitiveType]`, () => {
      expect(Prop instanceof PrimitiveType).toBe(true)
    })
    it(`ArgTypes.${arg}.test es una funcion`, () => {
      expect(typeof Prop.test === 'function').toBe(true)
    })
  }
})