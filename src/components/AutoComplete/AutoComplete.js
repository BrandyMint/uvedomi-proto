import React, { PropTypes } from 'react'
import { debounce } from 'debounce-decorator'
import { gotoChannel } from 'utils/navigation'
import Autocomplete from 'material-ui/AutoComplete'

export class AutoComplete extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      dataSource: []
    }
  }

  handleSearch () {
    const router = this.context.router
    return (chosenRequest, index) => {
      return gotoChannel(router, chosenRequest.id)()
    }
  }

  handleInputUpdate = debounce((searchText, dataSource) => {
    this.setState({
      dataSource: [
        {id: 2, text: 'Taaasty', value: 'Taaasty', private: false},
        {id: 3, text: 'Brian Goodwin', value: 'Brian Goodwin', private: true},
        {id: 4, text: 'Milica Slobodanka Vasilija', value: 'Milica Slobodanka Vasilija', private: false},
        {id: 5, text: 'Izaro Zuriñe Ederne', value: 'Izaro Zuriñe Ederne', private: false},
        {id: 6, text: 'Ihintza Itziar Amets', value: 'Ihintza Itziar Amets', private: false},
        {id: 7, text: 'Gotzone Lorea Ainhoa', value: 'Gotzone Lorea Ainhoa', private: false}
      ]
    })
  })

  render () {
    return (
      <div className='ChannelsAutocomplete-input'>
        <Autocomplete
          fullWidth
          floatingLabelText='Введите название канала'
          filter={Autocomplete.caseInsensitiveFilter}
          dataSource={this.state.dataSource}
          onNewRequest={this.handleSearch()}
          onUpdateInput={this.handleInputUpdate}
          maxSearchResults={5}
        />
      </div>
    )
  }
}

export default AutoComplete

