//Variables for hour, minute, second - time
var hr, mn, sc;

var hrMap, mnMap, scMap;

//Variables for day, month, year - date
var dy, mnt, yr;

var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var periodAMPM;

var odibeeFont;

var blindingLightsSong, slowHandsSong, uptownFunkSong, watermelonSugarSong;

var songPlaying;

function preload() {
  blindingLightsSong = createAudio("assets/music/blinding-lights.mp3");
  slowHandsSong = createAudio("assets/music/slow-hands.mp3");
  uptownFunkSong = createAudio("assets/music/uptown-funk.mp3");
  watermelonSugarSong = createAudio("assets/music/watermelon-sugar.mp3");
}

function setup() {
  createCanvas(800, 800);

  odibeeFont = loadFont("assets/fonts/OdibeeSans-Regular.ttf");

  songPlaying = false;
}

function draw() {
  if(songPlaying === true) {
    background(random(0, 255), random(0, 255), random(0, 255));
  }
  else {
    background(0);
  }
  
  //Using predefined functions from p5.js to initalize the hour, minute, and second variables
  hr = hour();
  mn = minute();
  sc = second();

  //Retrieving day, month, and year from p5.js to display ons screen
  dy = day();
  mnt = month();
  yr = year();

  //informing using to press any key in order to play music
  fill("white");
  textFont(odibeeFont);
  textSize(24);
  text("Press any key to play/pause music!", 515, 740);
  text("By pressing any key you also alternate between backgrounds colors!", 275, 780);

  //Styling to display time & date
  textFont(odibeeFont);
  textSize(36);
  fill(255);

  //for-loop to find todays date's month
  for(var index = 0; index < monthArray.length; index++) {
    if(index+1 === mnt) {
      text("Today is - " + monthArray[index] + " " + dy + ", " + yr, 25, 50);
    }
  }

  //add "AM" or "PM" when time is displayed
  if(hr > 12) {
    periodAMPM = "PM";
  }
  else {
    periodAMPM = "AM";
  }

  text("The time is - " + hr%12 + ":" + mn + ":" + sc + " " + periodAMPM, 25, 100);

  //add music in the background
  //musicPlayer();

  //displays the arcs for the clock
  displayClock();

  //displayst the clock's hands
  clockHands();
}

function displayClock() {
  //rotates back 90 degrees
  translate(width/2, height/2);
  rotate(270);

  //styling & thickness
  angleMode(DEGREES);
  noFill();
  stroke(255);
  strokeWeight(13);

  //uses the p5.js map function to translate the time into an angle
  hrMap = map(hr % 12, 0, 12, 0, 360);
  //console.log(hrMap);
  //using the mapFunction, draws the hour represenation with arc()
  arc(-40, 0, 500, 500, 0, hrMap);

  //drawing arc for minute
  mnMap = map(mn, 0, 60, 0, 360);
  
  stroke(0, 255, 255);
  arc(-40, 0, 450, 450, 0, mnMap);

  //drawing arc for second
  scMap = map(sc, 0, 60, 0, 360);

  stroke(0, 0, 255);
  arc(-40, 0, 400, 400, 0, scMap);
}

function clockHands() {
  //hr clock hand
  stroke(255);
  line(-40, 0, 50*cos(hrMap)-40, 60*sin(hrMap));

  //mn clock hand
  stroke(0, 255, 255);
  line(-40, 0, 85*cos(mnMap)-40, 85*sin(mnMap));

  //sc clock hand
  stroke(0, 0, 255);
  line(-40, 0, 120*cos(scMap)-40, 120*sin(scMap));
}

function keyPressed() {
  if(songPlaying === false) {
    uptownFunkSong.play();
    songPlaying = true;
    previouslyPlayed = true;
  }
  else if(songPlaying === true) {
    uptownFunkSong.stop();
    songPlaying = false;

    background(0);
  }

  // while(songPlaying === true) {
  //   background(random(0, 255), random(0, 255), random(0, 255));
  // }

  // var songArray = [blindingLightsSong, slowHandsSong, uptownFunkSong, watermelonSugarSong];

  // for(var i = 0; i < songArray.length; i++) {
  //   if(keyCode === UP_ARROW) {
  //     songArray[i].play();
  //   }
  //   else if(songArray[i].isPlaying && keyCode === UP_ARROW) {
  //     songArray[i].stop();
  //   }
  // }

}

// function mouseClicked() {
//   uptownFunkSong.play();
// }