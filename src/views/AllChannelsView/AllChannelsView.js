import React, { PropTypes } from 'react'
import { gotoMyChannels } from 'utils/navigation'
import ChannelsList from 'components/ChannelsList'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MyChannelsIcon from 'material-ui/svg-icons/av/playlist-add-check'

import all_channels from './all_channels.json'

export default class AllChannelsView extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  static propTypes = {
    list: PropTypes.array.isRequired
  };
  static defaultProps = {
    list: all_channels
  };

  render () {
    return (
      <div>
        <AppBar
          className='app-bar'
          title='Все каналы'
          iconElementRight={
            <IconButton onTouchTap={gotoMyChannels(this.context.router)}>
              <MyChannelsIcon />
            </IconButton>
          }
        />
        <ChannelsList list={this.props.list} />
      </div>
    )
  }
}
