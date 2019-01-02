const { expect } = require('chai')
const sinon = require('sinon')
const index = require('./index')

describe('getDisplayTime', () => {
  let clock

  beforeEach(() => {
    clock = sinon.useFakeTimers()
  })
  afterEach(() => {
    clock.restore()
  })

  it('should return the same time and does not need to manipulate the clock for the test to pass', done => {
    index.getDisplayTime(time1 => {
      index.getDisplayTime(time2 => {
        console.log(time1)
        console.log(time2)
        expect(time1).to.equal(time2)
        done()
      })
    })
  })
})