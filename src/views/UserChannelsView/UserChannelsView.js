import React, { PropTypes } from 'react'
import ChannelsList from '../../components/ChannelsList'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import my_channels from './my_channels.json'

type Props = {
  list: array
};
const style = {
  arrow: {
    margin: '3px 0 0 -12px'
  }
}

export default class UserChannelsView extends React.Component<void, Props, void> {
  static propTypes = {
    list: PropTypes.array.isRequired
  };
  static defaultProps = {
    list: my_channels
  }

  back () {
    return history.go(-1)
  }

  render () {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <IconButton onClick={this.back} style={style.arrow}><ArrowBack /></IconButton>
            <ToolbarTitle text='Мои каналы' />
          </ToolbarGroup>
        </Toolbar>

        <ChannelsList list={this.props.list} />
      </div>
    )
  }
}
