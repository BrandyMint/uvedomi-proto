import reducer, { initialState } from 'redux/modules/messages'

describe('(Redux) messages', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})
