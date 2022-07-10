import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom'
import 'jest-canvas-mock'
import fetch from 'node-fetch'
import ResizeObserver from 'resize-observer-polyfill'
import { TextDecoder, TextEncoder } from 'util'

global.ResizeObserver = ResizeObserver
global.TextEncoder = TextEncoder
;(global as any).TextDecoder = TextDecoder
;(global as any).fetch = fetch

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
