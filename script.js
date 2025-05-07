async function displayDefaultMovies() {
  const apiKey = "2afda67d";
  const url = `https://www.omdbapi.com/?s=popular&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      displayMovies(data.Search.slice(0, 5));
      alert("No movies found.");
    }
  } catch (error) {
    alert("Failed to fetch movies.");
  }
}

async function searchMovies() {
  const query = document.getElementById("searchInput").value;
  const apiKey = "2afda67d";
  const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      displayMovies(data.Search);
    } else {
      alert("No movies found.");
    }
  } catch (error) {
    alert("Failed to fetch movies.");
  }
}

function displayMovies(movies) {
  const movieResults = document.getElementById("movieResults");
  movieResults.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
      <img src="${movie.Poster}" alt="${movie.Title}">
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
      <button onclick="viewMovieDetails('${movie.imdbID}')">View Details</button>
    `;

    movieResults.appendChild(movieCard);
  });
}

function viewMovieDetails(imdbID) {
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=ac82ae77-a1fc-46f4-99c6-72499965fe59`; // Ganti dengan API key kamu
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      alert(
        `Title: ${data.Title}\nPlot: ${data.Plot}\nRating: ${data.imdbRating}`
      );
    })
    .catch((err) => alert("Error fetching movie details."));
}

function filterCategory(category) {
  const input = document.getElementById("searchInput");
  input.value = category;
  searchMovies();
}

document.getElementById("searchButton").addEventListener("click", searchMovies);

window.onload = displayDefaultMovies;
