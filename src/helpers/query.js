import qs from 'qs'

export function getQuery () {
  return qs.parse(window.location.search.slice(1))
}

export function updateQuery (query) {
  const newUrl = window.location.origin + '/?' + qs.stringify(
    { ...getQuery(), ...query },
    { encode: false }
  ) + window.location.hash
  window.history.pushState({
    path: newUrl,
  }, '', newUrl)
}
