import {greeting} from '../src/index.ts'

describe('Index', () => {
  test('Greeting', () => {
    expect(greeting).toBe('Hello World!')
  })
})
