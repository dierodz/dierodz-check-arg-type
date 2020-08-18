class PrimitiveType {
  constructor (type) {
    switch (type) {
      case 'boolean': {
        this.test = value => typeof value === 'boolean'
        break
      }
      case 'number': {
        this.test = value => typeof value === 'number'
        break
      }
      case 'string': {
        this.test = value => typeof value === 'string'
        break
      }
      default: throw new TypeError('El argumento enviado no es válido')
    }
  }
}

module.exports = PrimitiveType
