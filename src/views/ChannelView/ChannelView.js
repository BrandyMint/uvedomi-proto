/* @flow */
import React, { PropTypes } from 'react'
import { List, ListItem } from 'material-ui/List'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import Check from 'material-ui/svg-icons/navigation/check'
import Close from 'material-ui/svg-icons/navigation/close'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import messages from './messages.json'

// We can use Flow (http://flowtype.org/) to type our component's props
// and state. For convenience we've included both regular propTypes and
// Flow types, but if you want to try just using Flow you'll want to
// disable the eslint rule `react/prop-types`.
// NOTE: You can run `npm run flow:check` to check for any errors in your
// code, or `npm i -g flow-bin` to have access to the binary globally.
// Sorry Windows users :(.
type Props = {
  params: array
};

const style = {
  arrow: {
    margin: '3px 0 0 -12px'
  },
  rightIcon: {
    margin: '14px 0 0 -12px'
  },
  refresh: {
    display: 'inline-block',
    position: 'relative'
  }
}

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export default class ChannelView extends React.Component<void, Props, void> {
  constructor (props) {
    super(props)
    this.successfullLoaded = this.successfullLoaded.bind(this)
    this.state = {
      loading: true
    }
  }

  static propTypes = {
    params: PropTypes.shape({
      channelId: PropTypes.string.isRequired
    })
  }

  componentDidMount () {
    this.setState({
      channel: this.findChannelById(this.props.params.channelId)
    })
    window.setTimeout(this.successfullLoaded, 1000)
  }

  findChannelById (id) {
    return [
      {id: 1, title: 'Kiiiosk', private: true},
      {id: 2, title: 'Taaasty', private: false},
      {id: 3, title: 'Brian Goodwin', private: true},
      {id: 4, title: 'Вася', private: false}
    ].find((c) => c.id === parseInt(id))
  }

  successfullLoaded () {
    this.setState({
      loading: false
    })
  }

  subscribeButton (channel) {
    return [3, 4].includes(channel.id) ? <Close style={style.rightIcon} /> : <Check style={style.rightIcon} />
  }

  back () {
    return history.go(-1)
  }

  render () {
    if (this.state.loading) {
      return (
        <RefreshIndicator
          size={40}
          left={150}
          top={200}
          status='loading'
          style={style.refresh}
        />
      )
    } else {
      return (
        <div>
          <Toolbar>
            <ToolbarGroup>
              <IconButton onClick={this.back} style={style.arrow}><ArrowBack /></IconButton>
              <ToolbarTitle text={this.state.channel.title} />
            </ToolbarGroup>
            <ToolbarGroup>
              {this.subscribeButton(this.state.channel)}
            </ToolbarGroup>
          </Toolbar>
          <List>
            {messages.map((item) =>
              <ListItem
                key={item.id}
                primaryText={item.text}
                secondaryText={item.created_at}
              />
            )}
          </List>
        </div>
      )
    }
  }
}
