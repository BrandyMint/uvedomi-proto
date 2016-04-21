import React, { PropTypes } from 'react'
import ChannelsList from 'components/ChannelsList'
import { goBack } from 'utils/navigation'

import AppBar from 'material-ui/AppBar'
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
        <AppBar
          className='app-bar'
          title='Мои каналы'
          iconElementLeft={<IconButton onTouchTap={goBack}><ArrowBack /></IconButton>}
        />
        <ChannelsList list={this.props.list} />
      </div>
    )
  }
}
