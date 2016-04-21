import React, { PropTypes } from 'react'
import _ from 'lodash'
import { goBack } from 'utils/navigation'

import { List, ListItem } from 'material-ui/List'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import Check from 'material-ui/svg-icons/navigation/check'
import Close from 'material-ui/svg-icons/navigation/close'
import CenteredRefreshIndicator from 'components/CenteredRefreshIndicator'

import messages from './messages.json'
import channels from '../AllChannelsView/all_channels.json'

export default class ChannelView extends React.Component {
  static propTypes = {
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
    return _.find(channels, { id: parseInt(id) })
  }

  successfullLoaded () {
    this.setState({
      loading: false
    })
  }

  subscribeButton (channel) {
    return [3, 4].includes(channel.id) ? <IconButton><Close/></IconButton> : <IconButton><Check/></IconButton>
  }

  render () {
    return (
      <div>
        <AppBar
          className='app-bar'
          title={this.state.channel.title}
          iconElementLeft={<IconButton onTouchTap={goBack}><ArrowBack /></IconButton>}
          iconElementRight={this.subscribeButton(this.state.channel)}
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
