import React, { PropTypes } from 'react'
import { gotoMyChannels } from 'utils/navigation'
import ChannelsList from 'components/ChannelsList/ChannelsList'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MyChannelsIcon from 'material-ui/svg-icons/av/playlist-add-check'

export default class AllChannelsView extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  static propTypes = {
    channels_list: PropTypes.array.isRequired,
    subscriptions: PropTypes.array.isRequired,
    subscribeAction: PropTypes.func.isRequired
  }

  listIcon () {
    return <IconButton onTouchTap={gotoMyChannels(this.context.router)}>
      <MyChannelsIcon />
    </IconButton>
  }

  render () {
    return (
      <div>
        <AppBar
          className='AppBar'
          title='Все каналы'
          iconElementRight={this.listIcon()}
        />
        <ChannelsList
          channels_list={this.props.channels_list}
          subscriptions={this.props.subscriptions}
          subscribeAction={this.props.subscribeAction} />
      </div>
    )
  }
}
