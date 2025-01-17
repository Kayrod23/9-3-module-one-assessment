/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let movieTitleArr = []
  for (let i = 0; i < movies.length; i++) {
    movieTitleArr.push(movies[i].title) 
  }
  return movieTitleArr
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  let highestMetaScore = 0
  for (let i = 0; i < movies.length; i++) {
    if(movies[i].metascore > highestMetaScore) {
      highestMetaScore =  Number(movies[i].metascore)
    }
  }
  return highestMetaScore
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  let averageIMDBRating = 0
  for( let i = 0; i < movies.length; i++) {
    averageIMDBRating += Number(movies[i].imdbRating) 
  }
  if(movies.length > 0) {
    averageIMDBRating = averageIMDBRating / movies.length
  }
  return averageIMDBRating
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  let movieRatingCount = {}
  let gCount = 0
  let pg13Count = 0
  let pgCount = 0
  for (let i = 0; i < movies.length; i++) {
    if(movies[i].rated === "G") {
      gCount ++
      movieRatingCount[movies[i].rated] = gCount
    } else if(movies[i].rated === "PG") {
      pgCount ++
      movieRatingCount[movies[i].rated] = pgCount
    } else if(movies[i].rated === "PG-13") {
      pg13Count ++
      movieRatingCount[movies[i].rated] = pg13Count
    }
  }
  return movieRatingCount
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  let movieMatch = null
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].imdbID === id) {
      movieMatch  = movies[i]
    }
  }
  return movieMatch
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let matchingMovies = []
  let lowercase = genre.toLowerCase()
  let genreFormatted = genre.charAt(0).toUpperCase() + lowercase.slice(1)
  for (let i = 0; i < movies.length; i++) {
    for (let j = 0; j < movies[i].genre.split(", ").length; j++) {
      if (movies[i].genre.split(", ")[j] === genreFormatted) {
        matchingMovies.push(movies[i])
      }
    }
  }
  return matchingMovies
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let movieReleased = []
  for (let i = 0; i < movies.length; i++) {
    if (Number(movies[i].released.split(" ")[2]) === year || Number(movies[i].released.split(" ")[2]) < year) {
      movieReleased.push(movies[i])
    }
  }
  return movieReleased
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  let biggestBoxOfficeMovie = null;
  let biggestBoxOfficeMovieAmount = 0;
  for (let i = 0; i < movies.length; i++) {
    let boxOfficeCash = movies[i].boxOffice.split(",").join("")
    boxOfficeCash = boxOfficeCash.slice(1)
    if (parseInt(boxOfficeCash) > biggestBoxOfficeMovieAmount) {
      biggestBoxOfficeMovieAmount = parseInt(boxOfficeCash)
      biggestBoxOfficeMovie = movies[i].title
    }
  }
  return biggestBoxOfficeMovie
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
