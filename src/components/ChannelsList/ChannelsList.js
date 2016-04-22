import React, { PropTypes } from 'react'
import { includes } from 'lodash'
import { gotoChannel } from 'utils/navigation'
import { List, ListItem } from 'material-ui/List'
import LockOpen from 'material-ui/svg-icons/action/lock-open'
import Bell from 'material-ui/svg-icons/social/notifications-none'
import BellActive from 'material-ui/svg-icons/social/notifications-active'
import Lock from 'material-ui/svg-icons/action/lock'

export default class ChannelsList extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  static propTypes = {
    channels_list: PropTypes.array.isRequired,
    subscriptions: PropTypes.array.isRequired
  }

  privacyIcon (priv) {
    return priv ? <Lock /> : <LockOpen />
  }

  subscribedIcon (item) {
    return this.subscribed(item) ? <BellActive /> : <Bell />
  }

  subscribed (item) {
    return includes(this.props.subscriptions, item.id)
  }

  newMessagesCount (item) {
    if (item.new_messages_count > 0) {
      return <div className='channel-item-new-messages-text'>{item.new_messages_count} новых сообщений</div>
    }
  }

  render () {
    return (
      <List>
        {this.props.channels_list.map((item) =>
          <ListItem
            key={item.id}
            onTouchTap={gotoChannel(this.context.router, item.id)}
            primaryText={item.title}
            secondaryText={this.newMessagesCount(item)}
            leftIcon={this.privacyIcon(item.private)}
            rightIcon={this.subscribedIcon(item)}
          />
        )}
      </List>
    )
  }
}
