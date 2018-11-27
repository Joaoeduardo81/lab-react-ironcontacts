import React, { Component } from 'react'; 

const actorsArray = [
  {
  "name": "Idris Elba",
  "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
  "popularity": 11.622713
},
{
  "name": "Jessica Chastain",
  "pictureUrl": "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
  "popularity": 8.324357
},
{
  "name": "Johnny Depp",
  "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
  "popularity": 15.656534
},
{
  "name": "Emilia Clarke",
  "pictureUrl": "https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
  "popularity": 16.211837
},
{
  "name": "Leonardo DiCaprio",
  "pictureUrl": "https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
  "popularity": 11.245333
},
]

const ListActors = actorsArray.map((oneNumber, index) => {
return(
<td key={index}>{ oneNumber.name } { oneNumber.pictureUrl } { oneNumber.popularity }</td>)
}
);

export default ListActors;

