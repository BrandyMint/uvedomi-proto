// Constants
const ACTION = 'ACTION'
const ACTION_HANDLERS = {
  [ACTION]: handleAction
}

// Action Creators
export function myAction (payload) {
  return {
    type: ACTION,
    payload
  }
}

function handleAction (state, action) {

}

// Reducer
export const initialState = {}
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
