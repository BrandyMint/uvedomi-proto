import React, { PropTypes } from 'react'
import { includes, isNil } from 'lodash'
import { gotoChannel } from 'utils/navigation'
import { SUCCESS_SHOW_CHANNEL } from 'redux/modules/password_dialog'

import { List, ListItem } from 'material-ui/List'
import LockOpen from 'material-ui/svg-icons/action/lock-open'
import Lock from 'material-ui/svg-icons/action/lock'
import SubscriptionSwitch from 'components/SubscriptionSwitch'
import PasswordDialog from 'components/PasswordDialog'

export default class ChannelsList extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  static propTypes = {
    channels_list: PropTypes.array.isRequired,
    subscriptions: PropTypes.array.isRequired,
    passwords: PropTypes.array,
    password_dialog: PropTypes.object,
    subscribeAction: PropTypes.func,
    savePasswordAction: PropTypes.func,
    passwordDialogOpenAction: PropTypes.func,
    passwordDialogCloseAction: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.passwordDialogSuccessAction = this.passwordDialogSuccessAction.bind(this)
  }

  privacyIcon (item) {
    return item.private ? <Lock /> : <LockOpen />
  }

  subscribedIcon (item) {
    if (isNil(this.props.subscribeAction)) return
    return <SubscriptionSwitch
      channel={item}
      subscribed={this.subscribed(item)}
      subscribeAction={this.props.subscribeAction}
      passwordDialogOpenAction={this.props.passwordDialogOpenAction}
    />
  }

  subscribed (item) {
    return includes(this.props.subscriptions, item.id)
  }

  handleItemTap (item) {
    if (item.private && !this.subscribed(item)) {
      return (e) => {
        this.props.passwordDialogOpenAction({
          channel_id: item.id,
          open: true,
          success: SUCCESS_SHOW_CHANNEL
        })
      }
    } else {
      return gotoChannel(this.context.router, item.id)
    }
  }

  passwordDialogSuccessAction () {
    if (this.props.password_dialog.success === SUCCESS_SHOW_CHANNEL) {
      return gotoChannel(this.context.router, this.props.password_dialog.channel_id)()
    } else {
      this.props.subscribeAction({
        channelId: this.props.password_dialog.channel_id,
        doSubscribe: true
      })
    }
  }

  passwordDialog () {
    if (isNil(this.props.password_dialog)) return
    return <PasswordDialog
      channelId={this.props.password_dialog.channel_id}
      open={this.props.password_dialog.open}
      passwords={this.props.passwords}
      savePasswordAction={this.props.savePasswordAction}
      successAction={this.passwordDialogSuccessAction}
      closeAction={this.props.passwordDialogCloseAction}
    />
  }

  render () {
    return (
      <div>
        {this.passwordDialog()}
        <List>
          {this.props.channels_list.map((item) =>
            <ListItem
              key={item.id}
              onTouchTap={this.handleItemTap(item)}
              primaryText={item.title}
              leftIcon={this.privacyIcon(item)}
              rightIcon={this.subscribedIcon(item)}
            />
          )}
        </List>
      </div>
    )
  }
}
