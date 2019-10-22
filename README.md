# Liri-Bot

- What is Liri
  * LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

- concert-this
  - To use this function, type **node liri.js concert-this *<artist/band-name>*** in Terminal

  * This will search the Bands in Town Artist Events API to render the following information about event to the terminal:

    * Name of the venue
    * Venue Location
    * Date of the Event

![Screenshot of concert-this]
(https://github.com/keewook2/Liri-Bot/blob/master/images/screenshot_concert-this.png?raw=true)

- spotify-this-song
  - To use this function, type **node liri.js spotify-this-song *<song-name>*** in Terminal

  * This will search the [node-spotify-api] package to retrieve song information from spotify API. It will render following information to the terminal:

    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from

![Screenshot of spotify-this-song]
(https://github.com/keewook2/Liri-Bot/blob/master/images/screenshot_spotify-this-song.png?raw=true)

- movie-this
  - To use this function, type **node liri.js movie-this *<movie-name>*** in Terminal

  * This will search the OMDB API to retrieve the following information about movie to the terinal:

    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.

![Screenshot of movie-this]
(https://github.com/keewook2/Liri-Bot/blob/master/images/screenshot_movie-this.png?raw=true)
- do-what-it-says
  - To use this function, type **node liri.js do-what-it-says** in Terminal

  * This will take the text inside of `random.txt` using fs package and then use it to call the liri commands.

![Screenshot of random.txt]
(https://github.com/keewook2/Liri-Bot/blob/master/images/screenshot_random-txt.png?raw=true)

![Screenshot of do-what-it-says]
(https://github.com/keewook2/Liri-Bot/blob/master/images/screenshot_do-what-it-says.png?raw=true)