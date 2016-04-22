import reducer, { initialState } from 'redux/modules/channels'

describe('(Redux) channels', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})
