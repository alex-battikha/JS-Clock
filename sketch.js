//Variables for hour, minute, second - time
var hr, mn, sc;

var hrMap, mnMap, scMap;

//Variables for day, month, year - date
var dy, mnt, yr;

var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var periodAMPM;

var odibeeFont;

function setup() {
  createCanvas(800, 800);

  odibeeFont = loadFont("fonts/OdibeeSans-Regular.ttf");
}

function draw() {
  background(0);

  // translate(width/2, height/2);
  // rotate(270);
  
  //Using predefined functions from p5.js to initalize the hour, minute, and second variables
  hr = hour();
  mn = minute();
  sc = second();

  //Retrieving day, month, and year from p5.js to display ons screen
  dy = day();
  mnt = month();
  yr = year();

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

  displayClock();

  //add sound effects/music in the background
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