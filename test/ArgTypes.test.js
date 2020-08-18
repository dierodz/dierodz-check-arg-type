const { assert } = require('chai')
const req = require('../helper/req')

const ArgTypes = req('ArgTypes')
const PrimitiveType = req('PrimitiveType')

/* eslint-disable no-undef */

describe('ArgTypes', () => {
  for (const arg in ArgTypes) {
    const Prop = new ArgTypes[arg](arg)
    it(`ArgTypes.${arg} es una instancia de [PrimitiveType]`, () => {
      assert.isTrue(Prop instanceof PrimitiveType)
    })
    it(`ArgTypes.${arg}.test es una funcion`, () => {
      assert.isTrue(typeof Prop.test === 'function')
    })
  }
})
