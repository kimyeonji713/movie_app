const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTMxNDM5MWQzZjNjMWU5NmM2ZDE0MDRhN2VkNmIxZiIsIm5iZiI6MTcyMTUyNzg3NS4wMzg3MTYsInN1YiI6IjY2OGY5NzQzOGUzOWM5YzlmMjEwZWUxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RjFaG-fZLR0D_RfVfNRQEYdFK0L7iYRXsM8Q1Kz6Tfo",
  },
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upcoming = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());

export const trending = () =>
  fetch(url("trending/movie/day"), options).then((res) => res.json());

export const discoverMovie = (id) =>
  fetch(
    url(
      `discover/movie?include_adult=false&include_video=false&language=ko-KR&with_genres=${id}`
    ),
    options
  ).then((res) => res.json());

export const movieDetail = (movie_id) =>
  fetch(url(`movie/${movie_id}`), options).then((res) => res.json());

// export const similar = (movie_id) =>
//   fetch(url(`movie/${movie_id}/similar`), options).then((res) => res.json());

export const searchMovie = (keyword) => {
  const searchUrl = baseUrl + `search/movie?query=${keyword}&language=ko-kr`;
  return fetch(searchUrl, options).then((res) => res.json());
};

export const genre = () => {
  const genrelUrl = baseUrl + `genre/movie/list?language=ko-kr`;
  return fetch(genrelUrl, options).then((res) => res.json());
};

export const videos = (movie_id) => {
  const videolUrl = baseUrl + `movie/${movie_id}/videos?language=ko-kr`;
  return fetch(videolUrl, options).then((res) => res.json());
};
