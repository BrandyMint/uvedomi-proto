import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

export function goBack () {
  return history.go(-1)
}
export function gotoMyChannels (routerContext) {
  return () => routerContext.push('/my')
}
export function gotoChannel (routerContext, id) {
  return () => routerContext.push(`/channels/${id}`)
}
