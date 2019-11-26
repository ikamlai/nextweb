import * as API from './repository'

export function getNewReleases({ token, limit }) {
  return API.getNewReleases({ token, limit })
}

export function getAlbumById(id, { token }) {
  // console.log('xxx id=' + id + ' | token=' + token)
  return API.getAlbumById(id, { token }).then(response => {
    console.log(response)
    response.title = response.name
    response.subTitle = response.artists.map(artists => artists.name).join(', ')
    response.image = response.images[0].url
    // response.bottomLine = 'Type: ' + response.album_type

    response.bottomLine = [
      'Type: ' + response.album_type,
      ' ๐ ',
      response.total_tracks,
      ' Tracks',
    ]

    response.tracks = response.tracks.items.map(track => {
      // track.name = track.name
      track.artist = response.artist
      track.album = track.artists.map(artist => artist.name).join(', ')
      track.image = track.image
      track.previewUrl = track.preview_url
      track.durationMs = track.duration_ms

      return track
    })

    return response
  })
}
