<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Movie Search App</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
    <div class="sidebar">
        <h2>Categories</h2>
        <ul>
            <li><a href="#" onclick="filterCategory('Action')">Action</a></li>
            <li><a href="#" onclick="filterCategory('Comedy')">Comedy</a></li>
            <li><a href="#" onclick="filterCategory('Drama')">Drama</a></li>
            <li><a href="#" onclick="filterCategory('Thriller')">Thriller</a></li>
            <li><a href="#" onclick="filterCategory('Horror')">Horror</a></li>
        </ul>
    </div>

    <div class="main-content">
        <h1>Movie Search</h1>
        <input type="text" id="searchInput" placeholder="Search for movies...">
        <button id="searchButton" onclick="searchMovies()">Search Movies</button>

        <div id="movieResults"></div>
    </div>

  <script src="script.js"></script>
</body>
</html>
