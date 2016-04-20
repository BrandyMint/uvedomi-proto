import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

export default class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired
  };

  get content () {
    return (
      <Router history={this.props.history}>
        {this.props.routes}
      </Router>
    )
  }

  render () {
    const muiTheme = getMuiTheme()
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={this.props.store}>
          <div style={{ height: '100%' }}>
            {this.content}
          </div>
        </Provider>
      </MuiThemeProvider>
    )
  }
}
