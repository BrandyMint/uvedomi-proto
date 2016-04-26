import React, { PropTypes } from 'react'
import { debounce } from 'debounce-decorator'
import { savedPassword as saved_pass } from 'utils/finders'

import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'

export class PasswordDialog extends React.Component {
  static propTypes = {
    channelId: PropTypes.number.isRequired,
    open: PropTypes.bool.isRequired,
    passwords: PropTypes.array.isRequired,
    savePasswordAction: PropTypes.func.isRequired,
    successAction: PropTypes.func.isRequired,
    closeAction: PropTypes.func.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {
      password: this.savedPassword(this.props.passwords, this.props.channelId),
      errorText: ''
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({password: this.savedPassword(nextProps.passwords, nextProps.channelId)})
  }

  savedPassword (passwords, channelId) {
    return saved_pass(passwords, channelId)
  }

  handlePasswordInput = (e) => {
    if (this.validPassword(this.state.password)) {
      this.props.savePasswordAction({
        id: this.props.channelId,
        password: this.state.password
      })
      this.props.successAction()
      this.setState({errorText: ''})
      this.props.closeAction()
    } else {
      this.setState({errorText: 'Неверный пароль'})
    }
  }

  validPassword (password) {
    // TODO: check password request
    return password === '123'
  }

  handlePasswordChange = debounce((e, value) => {
    this.setState({password: value})
  })

  // Кнопка Отмена неадекватна без этого
  closeButtonAction = () => {
    this.props.closeAction()
  }

  render () {
    const actions = [
      <FlatButton
        label='Отмена'
        primary
        onTouchTap={this.closeButtonAction}
      />,
      <FlatButton
        label='OK'
        primary
        keyboardFocused
        onTouchTap={this.handlePasswordInput}
      />
    ]
    return (
      <Dialog
        title='Закрытый канал'
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.closeAction}
      >
        <TextField
          fullWidth
          hintText='123456'
          errorText={this.state.errorText}
          onChange={this.handlePasswordChange}
          floatingLabelText='Введите пароль'
          defaultValue={this.state.password}
          type='password'
        />
      </Dialog>
    )
  }
}

export default PasswordDialog

