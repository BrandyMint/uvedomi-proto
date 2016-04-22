import reducer, { initialState } from 'redux/modules/application'

describe('(Redux) application', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})
