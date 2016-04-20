import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import ChannelsList from './ChannelsList'

const selector = createSelector(
  () => ({})
)
const actions = {}

export default connect(selector, actions)(ChannelsList)
