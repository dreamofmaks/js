"use strict";

const numberOfFilms = prompt("How many movies have you already seen?", '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let film = prompt("Whats the last movie you have seen?", "");
let mark = prompt("Rate it from 1 to 10, please", "");

let film2 = prompt("Whats the last movie you have seen?", "");
let mark2 = prompt("Rate it from 1 to 10, please", "");


personalMovieDb.movies[film] = mark;
personalMovieDb.movies[film2] = mark2;

console.log(personalMovieDb);

  