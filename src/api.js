const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/authentication";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTMxNDM5MWQzZjNjMWU5NmM2ZDE0MDRhN2VkNmIxZiIsIm5iZiI6MTcyMjA4MzM0OS4xNDgyMzEsInN1YiI6IjY2OGY5NzQzOGUzOWM5YzlmMjEwZWUxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jms5N_QPFD1QxsbyM4q7xKLVmruVJ-jFMlKdkiOV4Qs",
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

export const genres = () =>
  fetch(url("genre/movie/list"), options).then((res) => res.json());

export const movieDetail = (movie_id) =>
  fetch(url(`movie/${movie_id}`), options).then((res) => res.json());

export const latest = () =>
  fetch(url("movie/latest"), options).then((res) => res.json());

export const videos = (movie_id) =>
  fetch(url(`movie/${movie_id}/videos`), options).then((res) => res.json());

export const similar = (movie_id) =>
  fetch(url(`movie/${movie_id}/similar`), options).then((res) => res.json());

export const searchMovie = (keyword) => {
  const searchUrl = baseUrl + `search/movie?query=${keyword}&language=ko-kr`;
};
