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
    return subscribeChannel(state, action.payload)
  } else {
    return unsubscribeChannel(state, action.payload)
  }
}

function subscribeChannel (state, payload) {
  // TODO: request
  return uniq(concat(state, payload.channelId))
}

function unsubscribeChannel (state, payload) {
  // TODO: request
  return filter(state, (id) => { return id !== payload.channelId })
}

// Reducer
export const initialState = {}
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
