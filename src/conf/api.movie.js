import * as axios from 'axios';

const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
  req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjc5OGFmNDgwNDMxOWM2ZGE1NmQyMjU5ZGZkYzViOCIsInN1YiI6IjVlZDE4NzYxNTI4YjJlMDAxZTY3ZGM0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QhhHYAWBs9tPiy3qskLYPJeTeKPsEmgN3JzuxbgkhyY'
  return req;
})

export const apiMovieMap = (m) => ({
  img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
  title: m.title,
  details: m.release_date + ' | ' + m.vote_average + '/10 (' + m.vote_count + ')',
  description: m.overview
})

export default apiMovie;