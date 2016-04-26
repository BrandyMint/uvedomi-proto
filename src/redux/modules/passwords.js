import { filter } from 'lodash'

// Constants
const PASSWORD_SAVE = 'PASSWORD_SAVE'
const ACTION_HANDLERS = {
  [PASSWORD_SAVE]: handleSavePassword
}

// Action Creators
export function savePasswordAction (payload) {
  return {
    type: PASSWORD_SAVE,
    payload
  }
}

function handleSavePassword (state, action) {
  return [
    ...filter(state, (p) => { return p.id !== action.payload.id }),
    action.payload
  ]
}

// Reducer
export const initialState = {}
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
