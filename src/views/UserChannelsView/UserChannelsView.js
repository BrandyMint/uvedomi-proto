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

  filter_channels () {
    return filter(this.props.channels_list, (c) => includes(this.props.subscriptions, c.id))
  }

  channels_list () {
    if (this.props.subscriptions.length > 0) {
      return <ChannelsList
        channels_list={this.filter_channels()}
        subscriptions={this.props.subscriptions} />
    } else {
      return <div className='u-NoContent'>Здесь пока ничего нет.</div>
    }
  }

  render () {
    return (
      <div>
        <AppBar
          className='AppBar'
          title='Мои каналы'
          iconElementLeft={<IconButton onTouchTap={goBack}><ArrowBack /></IconButton>} />
        {this.channels_list()}
      </div>
    )
  }
}
