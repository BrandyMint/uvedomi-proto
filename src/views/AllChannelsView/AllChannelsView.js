import React, { PropTypes } from 'react'
import { gotoMyChannels } from 'utils/navigation'
import ChannelsList from 'components/ChannelsList/ChannelsList'
import AutoComplete from 'components/AutoComplete'

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
    passwords: PropTypes.array.isRequired,
    password_dialog: PropTypes.object.isRequired,
    subscribeAction: PropTypes.func.isRequired,
    savePasswordAction: PropTypes.func.isRequired,
    passwordDialogOpenAction: PropTypes.func.isRequired,
    passwordDialogCloseAction: PropTypes.func.isRequired
  }

  listIcon () {
    return <IconButton onTouchTap={gotoMyChannels(this.context.router)}>
      <MyChannelsIcon />
    </IconButton>
  }

  subscribe () {

  }

  render () {
    return (
      <div className='ChannelsAutocomplete-container'>
        <AppBar
          className='AppBar'
          title='Все каналы'
          iconElementRight={this.listIcon()}
        />
        <AutoComplete
          router={this.context.router} />
        <ChannelsList
          channels_list={this.props.channels_list}
          subscriptions={this.props.subscriptions}
          passwords={this.props.passwords}
          password_dialog={this.props.password_dialog}
          subscribeAction={this.props.subscribeAction}

          savePasswordAction={this.props.savePasswordAction}
          passwordDialogOpenAction={this.props.passwordDialogOpenAction}
          passwordDialogCloseAction={this.props.passwordDialogCloseAction}
        />
      </div>
    )
  }
}
