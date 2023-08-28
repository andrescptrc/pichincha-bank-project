export const isEmptyObject = (object: any): boolean =>
  object === undefined || object === null || Object.keys(object).length === 0
