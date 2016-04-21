import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { gotoChannel } from 'utils/navigation'
import { List, ListItem } from 'material-ui/List'
import LockOpen from 'material-ui/svg-icons/action/lock-open'
import Lock from 'material-ui/svg-icons/action/lock'

export default class ChannelsList extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  static propTypes = {
    list: PropTypes.array.isRequired
  }

  privacyIcon (priv) {
    return priv ? <Lock /> : <LockOpen />
  }

  newMessagesCount (item) {
    return item.new_messages_count > 0 ? <div className='channel-item-new-messages-text'>{item.new_messages_count} новых сообщений</div> : ''
  }

  render () {
    return (
      <List>
        {this.props.list.map((item) =>
          <ListItem
            key={item.id}
            onTouchTap={gotoChannel(this.context.router, item.id)}
            primaryText={item.title}
            secondaryText={this.newMessagesCount(item)}
            leftIcon={this.privacyIcon(item.private)}
          />
        )}
      </List>
    )
  }
}
