import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { subscribe as subscribeAction } from 'redux/modules/subscriptions'
import { savePasswordAction } from 'redux/modules/passwords'
import { passwordDialogOpenAction, passwordDialogCloseAction } from 'redux/modules/password_dialog'
import AllChannelsView from './AllChannelsView'

const selector = createSelector(
  (state) => state.channels_list,
  (state) => state.subscriptions,
  (state) => state.passwords,
  (state) => state.password_dialog,
  (channels_list, subscriptions, passwords, password_dialog) => ({
    channels_list,
    subscriptions,
    passwords,
    password_dialog
  })
)
const actions = {
  subscribeAction,
  savePasswordAction,
  passwordDialogOpenAction,
  passwordDialogCloseAction
}

export default connect(selector, actions)(AllChannelsView)
