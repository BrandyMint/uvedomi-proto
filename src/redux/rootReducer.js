import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import application from 'redux/modules/application'
import channels_list from 'redux/modules/channels'
import messages from 'redux/modules/messages'
import subscriptions from 'redux/modules/subscriptions'
import passwords from 'redux/modules/passwords'
import password_dialog from 'redux/modules/password_dialog'

export default combineReducers({
  application,
  channels_list,
  messages,
  subscriptions,
  passwords,
  password_dialog,
  router
})
