import { headers } from '../authorization/headers';

export function fetchNewReleases(searchTerm) {
  fetch(`https://api.spotify.com/v1/browse/new-releases`, { headers: headers() })
    .then(resp => resp.json())
    .then(data => this.setState({ newReleases: data }))
}
