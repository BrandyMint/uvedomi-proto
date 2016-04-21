import React from 'react'
import RefreshIndicator from 'material-ui/RefreshIndicator'

const style = {
  refresh: {
    display: 'inline-block',
    position: 'relative'
  }
}

function CenteredRefreshIndicator () {
  return (
    <RefreshIndicator
      size={40}
      left={150}
      top={200}
      status='loading'
      style={style.refresh}
    />
  )
}

export default CenteredRefreshIndicator
