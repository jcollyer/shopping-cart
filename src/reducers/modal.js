import { initialState } from '../api/initial-state'
import { SHOW_MODAL } from '../constants/action-types'

export default function products(state = initialState.modal, action) {
  switch(action.type) {
    case SHOW_MODAL:
      return Object.assign({}, {
        showModal: action.toggle
      })
    default:
      return state
  }
}
