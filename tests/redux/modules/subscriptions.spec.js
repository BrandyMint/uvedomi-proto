import reducer, { initialState } from 'redux/modules/subscriptions'

describe('(Redux) subscriptions', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})
