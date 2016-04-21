import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

export function goBack () {
  return history.go(-1)
}
