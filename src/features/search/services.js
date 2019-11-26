import * as API from './repository'

export function getSearchByKeywords({ token, keyword, limit }) {
  // console.log(keyword)

  if (keyword == '') {
    return null
  }

  return API.getSearchByKeywords({ token, keyword, limit }).then(response => {
    // console.log(response)

    let data = {}
    for (let key in response) {
      if (response.hasOwnProperty(key)) {
        data[key] = response[key].items.map(resp => {
          if (resp.images.length == 0) {
            resp.images = [
              {
                url: '',
              },
            ]
          }
          return resp
        })
      }
    }

    return data
  })
}
