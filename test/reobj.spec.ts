import { reObj } from '../test'

describe('test reverse object ', () => {
  it('reobj', () => {
    const inputValue = {
      hired: {
        be: {
          to: {
            deserve: 'I'
          }
        }
      }
    }
    const outputValue = {
      I: {
        deserve: {
          to: {
            be: 'hired'
          }
        }
      }
    }
    const result = reObj(inputValue)
    expect(result).toEqual(outputValue)
  })
})
