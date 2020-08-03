"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = prompt("How many movies have you already seen?", '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("How many movies have you already seen?", '');
    }
}

start();


const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function rememberMyFilms() {
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
}

rememberMyFilms();





function detectPersonalLevel() {
    if(personalMovieDb.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if(personalMovieDb.count >=10 && personalMovieDb.count < 30) {
        alert("Вы классический зритель");
    } else if(personalMovieDb.count >= 30) {
        alert("Вы киноман!");
    } else {
        alert("Error");
    }
}

detectPersonalLevel();


// console.log(personalMovieDb);

function showMyDB() {
    if(personalMovieDb.privat == false) {
        console.log(personalMovieDb);
    }
}

showMyDB();


function writeYourgenres() {
    for(let i = 0; i < 3; i++) {
        const genres = prompt(`Your favourite genre number ${i+1}`);
        personalMovieDb.genres[i] = genres;
    }
}

writeYourgenres();

  