import * as API from './repository'

export function getMyPlaylist({ token }) {
  return API.getMyPlaylist({ token })
}

export function getPlaylistById(id, { token }) {
  return API.getPlaylistById(id, { token }).then(response => {
    // console.log(response)
    response.title = response.name
    response.subTitle = ['By ' + response.owner.display_name]
    response.image = response.images[0].url
    response.bottomLine = [response.tracks.total, ' Tracks']

    response.tracks = response.tracks.items.map(track => {
      track.name = track.track.name
      track.artist = track.track.artists.map(artists => artists.name).join(', ')
      track.album = track.track.album.name
      track.image = track.track.album.images[0].url
      track.previewUrl = track.track.preview_url

      track.durationMs = track.track.duration_ms

      return track
    })

    return response
  })
}
