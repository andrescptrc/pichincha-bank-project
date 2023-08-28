import { isEmptyArray } from '@helpers/array'

describe('isEmptyArray Tests', () => {
  it('Should return that the array is empty', () => {
    const array = [] as unknown[]
    expect(isEmptyArray(array)).toBeTruthy()
  })

  it('Should return that the array is not empty', () => {
    const array = [1, 2, 3]
    expect(isEmptyArray(array)).toBeFalsy()
  })

  it('Should return that the array is not empty if its pass a undefined', () => {
    const array = undefined as unknown as unknown[]
    expect(isEmptyArray(array)).toBeTruthy()
  })
})
