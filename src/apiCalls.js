function fetchPokemon(url) {
  return fetch(`${url}`).then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error(`${response.status} ${response.statusText}`)
    }
  })
}

export default fetchPokemon