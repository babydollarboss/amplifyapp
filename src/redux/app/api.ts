import { parseJsonResponse } from '../../utils/post-fetch'

export function getLatestVersion() {
  return fetch('/version.json').then(parseJsonResponse)
}