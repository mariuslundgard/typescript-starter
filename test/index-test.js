const tape = require('tape')

const tsStarter = require('../dist/').default

tape('tsStarter() should return argv back', test => {
  test.plan(1)

  const argv = [
    'node',
    'index-test.js',
    'test'
  ]

  test.equal(argv, tsStarter(argv))
})
