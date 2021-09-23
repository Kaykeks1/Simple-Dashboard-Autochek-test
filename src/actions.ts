import {
  REQUEST_PERMITS,
  RECEIVE_PERMITS,
  REQUEST_PERMIT,
  RECEIVE_PERMIT
} from './constants'

export function requestPermits () {
  return { type: REQUEST_PERMITS }
}

export function receivePermits (data: object) {
  return { type: RECEIVE_PERMITS, data }
}

export function requestPermit (id: number) {
  return { type: REQUEST_PERMIT, id }
}

export function receivePermit (data: object) {
  return { type: RECEIVE_PERMIT, data }
}