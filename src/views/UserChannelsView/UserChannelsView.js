import React, { PropTypes } from 'react'
import ChannelsList from 'components/ChannelsList'
import { goBack } from 'utils/navigation'

import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'

import my_channels from './my_channels.json'

export default class UserChannelsView extends React.Component {
  static propTypes = {
    list: PropTypes.array.isRequired
  };
  static defaultProps = {
    list: my_channels
  }

  render () {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <IconButton onTouchTap={goBack} className='back-arrow'><ArrowBack /></IconButton>
            <ToolbarTitle text='Мои каналы' />
          </ToolbarGroup>
        </Toolbar>

        <ChannelsList list={this.props.list} />
      </div>
    )
  }
}
