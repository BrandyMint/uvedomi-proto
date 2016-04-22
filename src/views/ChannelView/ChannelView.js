import React, { PropTypes } from 'react'
import { find, includes } from 'lodash'
import { goBack } from 'utils/navigation'

import { List, ListItem } from 'material-ui/List'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import Bell from 'material-ui/svg-icons/social/notifications-none'
import BellActive from 'material-ui/svg-icons/social/notifications-active'
import CenteredRefreshIndicator from 'components/CenteredRefreshIndicator'

import messages from './messages.json'

export default class ChannelView extends React.Component {
  static propTypes = {
    channels_list: PropTypes.array.isRequired,
    subscriptions: PropTypes.array.isRequired,
    params: PropTypes.shape({
      channelId: PropTypes.string.isRequired
    })
  }

  constructor (props) {
    super(props)
    this.successfullLoaded = this.successfullLoaded.bind(this)
    this.state = {
      loading: true,
      channel: this.findChannelById(this.props.params.channelId)
    }
  }

  componentDidMount () {
    // this.setState({
    //   channel: this.findChannelById(this.props.params.channelId)
    // })
    window.setTimeout(this.successfullLoaded, 1000)
  }

  findChannelById (id) {
    return find(this.props.channels_list, { id: parseInt(id) })
  }

  successfullLoaded () {
    this.setState({
      loading: false
    })
  }

  subscribeButton (channel) {
    if (includes(this.props.subscriptions, channel.id)) {
      return <Bell/>
    } else {
      return <BellActive/>
    }
  }

  render () {
    return (
      <div>
        <AppBar
          className='app-bar'
          title={this.state.channel.title}
          iconElementLeft={<IconButton onTouchTap={goBack}><ArrowBack /></IconButton>}
          iconElementRight={<IconButton>{this.subscribeButton(this.state.channel)}</IconButton>}
        />
        {(() => {
          if (this.state.loading) {
            return <CenteredRefreshIndicator />
          } else {
            return <List>
              {messages.map((item) =>
                <ListItem
                  key={item.id}
                  primaryText={item.text}
                  secondaryText={item.created_at}
                />
              )}
            </List>
          }
        })()}
      </div>
    )
  }
}
