import reducer, { initialState } from 'redux/modules/password_dialog'

describe('(Redux) password_dialog', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})
