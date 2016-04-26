import React, { PropTypes } from 'react'
import { SUCCESS_SUBSCRIBE } from 'redux/modules/password_dialog'

// import Switch from 'material-ui/svg-icons/social/notifications-none'
// import SwitchActive from 'material-ui/svg-icons/social/notifications-active'
import Switch from 'material-ui/svg-icons/toggle/star-border'
import SwitchActive from 'material-ui/svg-icons/toggle/star'
import IconButton from 'material-ui/IconButton'

export default class SubscriptionSwitch extends React.Component {
  static muiName = 'IconButton';
  static propTypes = {
    channel: PropTypes.object.isRequired,
    subscribed: PropTypes.bool.isRequired,
    subscribeAction: PropTypes.func.isRequired,
    passwordDialogOpenAction: PropTypes.func.isRequired,
    appBarIcon: PropTypes.bool
  }

  handleTouchTap (doSubscribe) {
    return (e) => {
      e.stopPropagation()
      if (this.props.channel.private && doSubscribe) {
        this.props.passwordDialogOpenAction({
          channel_id: this.props.channel.id,
          open: true,
          success: SUCCESS_SUBSCRIBE
        })
      } else {
        this.subscribe(doSubscribe)
      }
    }
  }

  subscribe (doSubscribe) {
    this.props.subscribeAction({
      channelId: this.props.channel.id,
      doSubscribe
    })
  }

  icon () {
    if (this.props.subscribed) {
      return <SwitchActive {...this.props} onTouchTap={this.handleTouchTap(false)} />
    } else {
      return <Switch {...this.props} onTouchTap={this.handleTouchTap(true)} />
    }
  }

  appBarIcon (icon, options) {
    if (this.props.appBarIcon) {
      return <IconButton {...this.props} {...options}>{icon}</IconButton>
    }

    return icon
  }

  render () {
    return <div>
      {this.appBarIcon(
        this.icon(),
        { onTouchTap: this.handleTouchTap(!this.props.subscribed) }
      )}
    </div>
  }
}
