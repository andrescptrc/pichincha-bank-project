import { isEmptyObject } from '@helpers/object'

describe('IsEmptyObject Test', () => {
  it('Should return that the object is empty', () => {
    const object = {}
    expect(isEmptyObject(object)).toBeTruthy()
  })

  it('Should return that the object is not empty', () => {
    const object = { test: '123' }
    expect(isEmptyObject(object)).toBeFalsy()
  })

  it('Should return that the object is not empty if its pass a undefined', () => {
    expect(isEmptyObject(undefined)).toBeTruthy()
  })
})
