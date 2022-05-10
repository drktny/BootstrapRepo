class Movie {
    constructor(id, movieName, director, category) {
        this.id = id;
        this.movieName = movieName;
        this.director = director;
        this.category = category;
    }
}

//const movie = new Movie(1, "Spider-Man", "Sam Raimi", "Action");
//console.log(movie);

class WebUI {
    static getMovies() {
        const sampleMovies = [
            {
                id: 1,
                movieName: "The Godfather",
                director: "Francis Ford Cappola",
                category: "Crime"
            },
            {
                id: 2,
                movieName: "The Lord of The Rings",
                director: "Peter Jackson",
                category: "Action"
            },
            {
                id: 3,
                movieName: "Interstellar",
                director: "Christopher Nolan",
                category: "Sci-Fi"
            }
        ]

        for (var i = 0; i < sampleMovies.length; i++) {
            WebUI.addMovie(sampleMovies[i]);
        }
    }

    static addMovie(movie) {
        const movieTable = document.getElementById("movieTable");
        const tr = document.createElement("tr");

        tr.innerHTML = `
                        <td>${movie.id}</td>
                        <td>${movie.movieName}</td>
                        <td>${movie.director}</td>
                        <td>${movie.category}</td>
`
        movieTable.appendChild(tr);
    }
    
}

window.onload = function () {
    WebUI.getMovies();

    document.getElementById('submit').onclick = function () {
        const movieName = document.getElementById("movieName").value;
        const director = document.getElementById("directorName").value;
        const category = document.getElementById("categoryName").value;

        const movie = new Movie(4, movieName, director, category);
        console.log(movie);
        WebUI.addMovie(movie);
    }

    
}




