// Constants
const PASSWORD_DIALOG_OPEN = 'PASSWORD_DIALOG_OPEN'
const PASSWORD_DIALOG_CLOSE = 'PASSWORD_DIALOG_CLOSE'
const ACTION_HANDLERS = {
  [PASSWORD_DIALOG_OPEN]: handleOpen,
  [PASSWORD_DIALOG_CLOSE]: handleClose
}

export const SUCCESS_SUBSCRIBE = 'subscribe'
export const SUCCESS_SHOW_CHANNEL = 'showChannel'

// Action Creators
export function passwordDialogOpenAction (payload) {
  return {
    type: PASSWORD_DIALOG_OPEN,
    payload
  }
}

export function passwordDialogCloseAction (payload) {
  return {
    type: PASSWORD_DIALOG_CLOSE,
    payload
  }
}

function handleOpen (state, action) {
  return action.payload
}

function handleClose (state, action) {
  return { channel_id: 0, open: false, success: SUCCESS_SUBSCRIBE }
}

// Reducer
export const initialState = {}
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
