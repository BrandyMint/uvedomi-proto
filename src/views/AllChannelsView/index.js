import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import AllChannelsView from './AllChannelsView'

const selector = createSelector(
  (state) => state.channels_list,
  (state) => state.subscriptions,
  (channels_list, subscriptions) => ({
    channels_list,
    subscriptions
  })
)
const actions = {}

export default connect(selector, actions)(AllChannelsView)
