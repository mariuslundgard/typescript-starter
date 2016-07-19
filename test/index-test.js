const tape = require('tape')

const main = require('../dist/').default

tape('main() should return argv right back', test => {
  test.plan(1)

  const argv = [
    'node',
    'index-test.js',
    'test'
  ]

  test.equal(argv, main(argv))
})
