import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'
import LockOpen from 'material-ui/svg-icons/action/lock-open'
import Lock from 'material-ui/svg-icons/action/lock'

export default class ChannelsList extends React.Component {
  static propTypes = {
    list: PropTypes.array.isRequired
  }

  privacyIcon (priv) {
    return priv ? <Lock /> : <LockOpen />
  }

  render () {
    return (
      <List>
        {this.props.list.map((item) =>
          <ListItem
            key={item.id}
            containerElement={<Link to={`/channels/${item.id}`} />}
            primaryText={item.title}
            leftIcon={this.privacyIcon(item.private)}
          />
        )}
      </List>
    )
  }
}
