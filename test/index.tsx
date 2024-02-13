import '../src/index.tsx'

describe('Index', () => {
  test('Snapshot', async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    expect(document.getElementById('root')).toMatchSnapshot()
  }, 2000)
})
