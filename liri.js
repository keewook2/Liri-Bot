require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var input = process.argv[3];

switch(process.argv[2]){
    case "concert-this":
        (input ? concertThis(input) : concertThis("Celine+Dion"));
        break;
    case "spotify-this-song":
        (input ? sportifyThisSong(input) : sportifyThisSong("The Sign"));
        break;
    case "movie-this":
        (input ? movieThis(input) : movieThis("Mr. Nobody."));
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    default: console.log("You should type the correct input commands (ex: node liri.js concert-this)");
}

function concertThis(artist){
    // Using bandsintown API to show the Name of the Venue, Venue Location, and Date of the Venue
    // when we get Date of the Venue, using moment.js to format it to MM/DD/YYYY
    // "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios
    .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function(response){
        // console.log(JSON.stringify(response.data[0], null, 2));
        
        // IF WE WANT TO LIST ALL OF THE UPCOMING EVENTS
        // for (events in response.data){
        //     console.log("============");
        //     console.log(response.data[events].venue.name);
        //     console.log(response.data[events].venue.city);
        //     console.log(response.data[events].datetime);
        //     console.log("============");
        // }

        //IF WE WANT TO LIST JUST ONE UPCOMING EVENT
        console.log(response.data[0].venue.name);
        console.log(response.data[0].venue.city);
        console.log(response.data[0].datetime);
        
    }).catch(function(err){
        console.log(err);
    })
}

function sportifyThisSong(song){
    spotify.search({ type: 'track', query: song}, function(err, data){
        if (err) {
            console.log(err);
        }
        for (var i = 0; i < data.tracks.items.length; i++){
            var songData = data.tracks.items[i];
            console.log("================");
            console.log("Artist: " + songData.artists[0].name);
            console.log("Song: " + songData.name);
            console.log("Preview URL: " + songData.preview_url);
            console.log("Album: " + songData.album.name);
            console.log("================");
        }
        // console.log(data.tracks.items[0].artists);
        // console.log(JSON.stringify(data[0], null, 2));
    });
}

function movieThis(movie){
    var queryURL = "https://omdbapi.com/?apikey=trilogy&t=" + movie;
    // Using OMDB API to show 
    // * Title of the movie.
    // * Year the movie came out.
    // * IMDB Rating of the movie.
    // * Rotten Tomatoes Rating of the movie.
    // * Country where the movie was produced.
    // * Language of the movie.
    // * Plot of the movie.
    // * Actors in the movie.
    axios
    .get(queryURL)
    .then(function(response){
        console.log("Title: "+response.data.Title);
        console.log("Release Year: "+response.data.Year);
        if (response.data.Ratings[0])        console.log("IMDB Rating: " + response.data.Ratings[0].Value);
        if (response.data.Ratings[1])        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country produced: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
    }).catch(function(err){
        console.log(err);
    })
}

function doWhatItSays(){
    fs.readFile("random.txt","utf8",function(error,data){
        if (error){
            console.log(error);
        }
        var dataArr = data.split(",");
        var command = dataArr[0];
        var input = dataArr[1];

        if (command === "concert-this"){
            concertThis(input);
        } else if (command === "spotify-this-song"){
            sportifyThisSong(input);
        } else if (command === "movie-this"){
            movieThis(input);
        } else{
            console.log("Command is wrong, check your random.txt file");
        }
        
    })
}
