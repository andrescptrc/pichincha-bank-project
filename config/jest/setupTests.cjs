// config/jest/setupTests.js
require('@testing-library/jest-dom/extend-expect')

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
})

Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: jest.fn(),
})

global.console = {
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  write: jest.fn(),
}
