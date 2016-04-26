import React, { PropTypes } from 'react'
import { includes, isNil } from 'lodash'
import { gotoChannel } from 'utils/navigation'
import { List, ListItem } from 'material-ui/List'
import LockOpen from 'material-ui/svg-icons/action/lock-open'
import Lock from 'material-ui/svg-icons/action/lock'
import SubscriptionSwitch from 'components/SubscriptionSwitch'

export default class ChannelsList extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  static propTypes = {
    channels_list: PropTypes.array.isRequired,
    subscriptions: PropTypes.array.isRequired,
    subscribeAction: PropTypes.func
  }

  privacyIcon (priv) {
    return priv ? <Lock /> : <LockOpen />
  }

  subscribedIcon (item) {
    if (isNil(this.props.subscribeAction)) return
    return <SubscriptionSwitch
      channelId={item.id}
      subscribed={this.subscribed(item)}
      subscribeAction={this.props.subscribeAction} />
  }

  subscribed (item) {
    return includes(this.props.subscriptions, item.id)
  }

  render () {
    return (
      <List>
        {this.props.channels_list.map((item) =>
          <ListItem
            key={item.id}
            onTouchTap={gotoChannel(this.context.router, item.id)}
            primaryText={item.title}
            leftIcon={this.privacyIcon(item.private)}
            rightIcon={this.subscribedIcon(item)}
          />
        )}
      </List>
    )
  }
}
