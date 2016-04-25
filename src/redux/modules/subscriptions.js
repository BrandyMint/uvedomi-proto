import { filter, concat, uniq } from 'lodash'

// Constants
const SUBSCRIBE_ACTION = 'SUBSCRIBE_ACTION'
const ACTION_HANDLERS = {
  [SUBSCRIBE_ACTION]: handleSubscribe
}

// Action Creators
export function subscribe (payload) {
  return {
    type: SUBSCRIBE_ACTION,
    payload
  }
}

function handleSubscribe (state, action) {
  if (action.payload.doSubscribe) {
    return uniq(concat(state, action.payload.channelId))
  } else {
    return filter(state, (id) => { return id !== action.payload.channelId })
  }
}

// Reducer
export const initialState = {}
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
