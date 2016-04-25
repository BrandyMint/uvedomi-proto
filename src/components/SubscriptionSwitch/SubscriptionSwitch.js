import React, { PropTypes } from 'react'
import Bell from 'material-ui/svg-icons/social/notifications-none'
import BellActive from 'material-ui/svg-icons/social/notifications-active'
import IconButton from 'material-ui/IconButton'

export default class SubscriptionSwitch extends React.Component {
  static muiName = 'IconButton';
  static propTypes = {
    channelId: PropTypes.number.isRequired,
    subscribed: PropTypes.bool.isRequired,
    subscribeAction: PropTypes.func.isRequired,
    wrap: PropTypes.bool
  }

  handleTouchTap (doSubscribe) {
    return (e) => {
      e.stopPropagation()
      this.props.subscribeAction({
        channelId: this.props.channelId,
        doSubscribe
      })
    }
  }

  bell () {
    if (this.props.subscribed) {
      return <BellActive {...this.props} onTouchTap={this.handleTouchTap(false)} />
    } else {
      return <Bell {...this.props} onTouchTap={this.handleTouchTap(true)} />
    }
  }

  wrap (bell, options) {
    if (this.props.wrap)
      return <IconButton {...this.props} {...options}>{bell}</IconButton>

    return bell
  }

  render () {
    return this.wrap(
      this.bell(),
      { onTouchTap: this.handleTouchTap(!this.props.subscribed) }
    )
  }
}
