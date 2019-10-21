require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
// var spotify = new Spotify(keys.spotify);
var input = process.argv[3];

switch(process.argv[2]){
    case "concert-this":
        concertThis(input);
        break;
    case "spotify-this-song":
        sportifyThisSong();
        break;
    case "movie-this":
        if (!input) movieThis("MR. Nobody,");
        movieThis(input);
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


function movieThis(movie){
    // Using OMDB API to show 
    // * Title of the movie.
    // * Year the movie came out.
    // * IMDB Rating of the movie.
    // * Rotten Tomatoes Rating of the movie.
    // * Country where the movie was produced.
    // * Language of the movie.
    // * Plot of the movie.
    // * Actors in the movie.


}