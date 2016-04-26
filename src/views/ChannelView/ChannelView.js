import React, { PropTypes } from 'react'
import { get, find, includes } from 'lodash'
import { goBack } from 'utils/navigation'

import { List, ListItem } from 'material-ui/List'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import CenteredRefreshIndicator from 'components/CenteredRefreshIndicator'
import SubscriptionSwitch from 'components/SubscriptionSwitch'
import PasswordDialog from 'components/PasswordDialog'

export default class ChannelView extends React.Component {
  static propTypes = {
    channels_list: PropTypes.array.isRequired,
    subscriptions: PropTypes.array.isRequired,
    messages: PropTypes.array.isRequired,
    passwords: PropTypes.array.isRequired,
    password_dialog: PropTypes.object.isRequired,
    subscribeAction: PropTypes.func.isRequired,
    savePasswordAction: PropTypes.func.isRequired,
    passwordDialogOpenAction: PropTypes.func.isRequired,
    passwordDialogCloseAction: PropTypes.func.isRequired,
    params: PropTypes.shape({
      channelId: PropTypes.string.isRequired
    })
  }

  constructor (props) {
    super(props)
    this.successfullLoaded = this.successfullLoaded.bind(this)
    this.subscribe = this.subscribe.bind(this)
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

  subscribedIcon (channel) {
    return <SubscriptionSwitch
      channel={channel}
      subscribed={this.subscribed(channel)}
      subscribeAction={this.props.subscribeAction}
      passwordDialogOpenAction={this.props.passwordDialogOpenAction}
      appBarIcon />
  }

  subscribed (channel) {
    return includes(this.props.subscriptions, channel.id)
  }

  subscribe () {
    this.props.subscribeAction({
      channelId: this.state.channel.id,
      doSubscribe: true
    })
  }

  messages () {
    return get(find(this.props.messages, (obj) => { return obj.channel.id === this.state.channel.id }), 'list') || []
  }

  content () {
    if (this.state.loading) {
      return <CenteredRefreshIndicator />
    } else {
      return this.messagesList(this.messages())
    }
  }

  messagesList (messages) {
    if (messages.length > 0) {
      return <List>
        {messages.map((item) =>
          <ListItem
            key={item.id}
            primaryText={item.text}
            secondaryText={item.created_at}
          />
        )}
      </List>
    } else {
      return <div className='u-NoContent'>Здесь пока ничего нет.</div>
    }
  }

  render () {
    return (
      <div>
        <AppBar
          className='AppBar'
          title={this.state.channel.title}
          iconElementLeft={<IconButton onTouchTap={goBack}><ArrowBack /></IconButton>}
          iconElementRight={this.subscribedIcon(this.state.channel)}
        />
        <PasswordDialog
          channelId={this.props.password_dialog.channel_id}
          open={this.props.password_dialog.open}
          passwords={this.props.passwords}
          savePasswordAction={this.props.savePasswordAction}
          successAction={this.subscribe}
          closeAction={this.props.passwordDialogCloseAction}
        />
        {this.content()}
      </div>
    )
  }
}
