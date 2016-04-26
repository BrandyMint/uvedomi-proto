import { get, find } from 'lodash'

export function savedPassword (passwords, channel_id) {
  return get(
    find(passwords, { id: channel_id }), 'password'
  ) || ''
}

