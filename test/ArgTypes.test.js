/* eslint-disable no-undef */

const ArgTypes = require('../src/ArgTypes')
const PrimitiveType = require('../src/PrimitiveType')
const { assert } = require('chai')

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
