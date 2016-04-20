import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import ChannelsList from '../../components/ChannelsList'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MyChannelsIcon from 'material-ui/svg-icons/av/playlist-add-check'
import all_channels from './all_channels.json'

type Props = {
  list: array
};

const style = {
  myChannels: {
    margin: '3px 0 0 12px'
  }
}

export default class AllChannelsView extends React.Component<void, Props, void> {
  static propTypes = {
    list: PropTypes.array.isRequired
  };
  static defaultProps = {
    list: all_channels
  };

  render () {
    return (
      <div>
        <Toolbar firstChild>
          <ToolbarGroup>
            <ToolbarTitle text='Все каналы' />
          </ToolbarGroup>
          <ToolbarGroup>
            <Link to='/my'>
              <IconButton style={style.myChannels}><MyChannelsIcon /></IconButton>
            </Link>
          </ToolbarGroup>
        </Toolbar>

        <ChannelsList list={this.props.list} />
      </div>
    )
  }
}
