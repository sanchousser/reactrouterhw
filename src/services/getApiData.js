const API_KEY = 'bcb87fe6c076a1e8df47d044067b49bf';
const BASE_URL = 'https://api.themoviedb.org/3'

// function fetchData(endpoint) {
//     return fetch(`${BASE_URL}${endpoint}&api_key=${API_KEY}`)
//     .then(response => {
//         if(!response.ok) throw new Error('Something went wrong!')
//         return response.json()
//     })
// }

function fetchData(endpoint) {
  const separator = endpoint.includes('?') ? '&' : '?';
  return fetch(`${BASE_URL}${endpoint}${separator}api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) throw new Error('Something went wrong!');
      return response.json();
    });
}


export function fetchTrending() {
    return fetchData(`/trending/movie/day?`)
}

export function searchMovie(query) {
    return fetchData(`/search/movie?query=${query}`)
}

export function getMovieDetails(movieId) {
  return fetchData(`/movie/${movieId}?`);
}

export function getMovieCast(movieId) {
  return fetchData(`/movie/${movieId}/credits`);
}

export function getMovieReviews(movieId) {
  return fetchData(`/movie/${movieId}/reviews?`);
}