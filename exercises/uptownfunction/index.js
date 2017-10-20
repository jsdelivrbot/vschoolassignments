var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

function printLyrics(lyrics){
  var song = lyrics.join(" ");
  console.log(song);
}
printLyrics();

function reverseLyrics(){
  var tune = lyrics.reverse(" ");
  console.log(tune);

}
reverseLyrics();

function songBackwards(){
  console.log(lyrics.reverse.join(" ");)
}
songBackwards();

function printLyrics (s){
  for(i = 0; i < s.length; i++){
    if(i%2===0){
      return s[i]
    }
  }
}
printLyrics(lyrics);

function everyOtherLyric(){
  var otherArray = [];
  for (i = 0; i < lyrics.length; i += 2){
    otherArray.push(lyrics[i]);

  }
  console.log(otherArray.join(" "))a
}
