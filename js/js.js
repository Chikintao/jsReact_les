'use strict';

const numberOfFilms = +prompt('Скільки фільмів ви подивились?','');

const personalMovieDB = {
	count : numberOfFilms,
	movies :{},
	actors : {},
	genres : [],
	privat : false
};


const a = prompt('Ваш останній фільм?',''),
		b = prompt('На скільки ви його оцінюєте ?',''),
		c = prompt('Ваш останній фільм?',''),
		d = prompt('На скільки ви його оцінюєте ?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);