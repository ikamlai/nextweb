import { fetchAPI } from '@lib/api'

export function getSearchByKeywords({ token, keyword = '', limit = 18 } = {}) {
  return fetchAPI({
    path: '/search/',
    token,
    params: {
      type: 'artist,album,playlist',
      q: keyword,
      limit,
    },
  })
}
