import React, { PropTypes } from 'react'
import { filter, includes } from 'lodash'
import ChannelsList from 'components/ChannelsList/ChannelsList'
import { goBack } from 'utils/navigation'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'

export default class UserChannelsView extends React.Component {
  static propTypes = {
    channels_list: PropTypes.array.isRequired,
    subscriptions: PropTypes.array.isRequired
  }

  my_channels () {
    return filter(this.props.channels_list, (c) => includes(this.props.subscriptions, c.id))
  }

  render () {
    return (
      <div>
        <AppBar
          className='app-bar'
          title='Мои каналы'
          iconElementLeft={<IconButton onTouchTap={goBack}><ArrowBack /></IconButton>}
        />
        <ChannelsList
          channels_list={this.my_channels()}
          subscriptions={this.props.subscriptions} />
      </div>
    )
  }
}
