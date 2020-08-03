"use strict";

const numberOfFilms = +prompt("How many movies have you already seen?", '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for(let i = 0; i < 2; i++) {
    let film = prompt("Whats the last movie you have seen?", "");
    let mark = prompt("Rate it from 1 to 10, please", "");
    if (film != null && mark != null && film != '' && mark != '' && film.length < 50) {
        personalMovieDb.movies[film] = mark;
        console.log("Done");
    } else {
        console.log("error");
        i--;
    }
    
    
}


if(personalMovieDb.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if(personalMovieDb.count >=10 && personalMovieDb.count < 30) {
    alert("Вы классический зритель");
} else if(personalMovieDb.count >= 30) {
    alert("Вы киноман!");
} else {
    alert("Error");
}


console.log(personalMovieDb);



  