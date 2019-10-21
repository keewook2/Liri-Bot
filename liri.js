require("dotenv").config();
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

function runCommands(input){
    switch(input){
        case "concert-this":
            concertThis();
            break;
        case "spotify-this-song":
            sportifyThisSong();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default: console.log("You should type the correct input commands (ex: node liri.js concert-this)");
    }
}