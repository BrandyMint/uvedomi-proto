import reducer, { initialState } from 'redux/modules/passwords'

describe('(Redux) passwords', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})
