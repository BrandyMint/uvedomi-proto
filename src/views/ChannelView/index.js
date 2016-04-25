import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { subscribe as subscribeAction } from 'redux/modules/subscriptions'
import ChannelView from './ChannelView'

const selector = createSelector(
  (state) => state.channels_list,
  (state) => state.subscriptions,
  (state, props) => props.params.channelId,
  (channels_list, subscriptions, channelId) => ({
    channels_list,
    subscriptions,
    params: {
      channelId
    }
  })
)
const actions = {
  subscribeAction
}

export default connect(selector, actions)(ChannelView)
