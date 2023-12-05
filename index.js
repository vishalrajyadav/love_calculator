// jshint esversion:6
var isNotClicked = true;
var audio;

function calculateLoveScore(names) {
  var loves = ["l", "o", "v", "e", "s"];
  var countArray = [];

  names = names.toLowerCase();

  countArray = loves.map(function (item) {
    count = 0;
    for (var i = 0; i < names.length; i += 1) {
      if (item === names[i]) {
        count += 1;
      }
    }
    return count;
  });

  // Increase the weight of the scores to get a wider range
  countArray = countArray.map(function (count) {
    return count * 20; // You can adjust this factor to control the range of scores
  });

  return countArray.reduce(function (acc, val) {
    return acc + val;
  }, 0);
}

var loveCalculator = function () {
  var yourName = document.getElementById("firstname").value;
  var loversName = document.getElementById("lovername").value;

  // Calculate love score
  var loveFinal = calculateLoveScore(yourName + loversName);

  // Check love score range and play corresponding song
  if (loveFinal < 30) {
    playSong("dil.mp3"); // Replace "dil.mp3" with the actual file name of your song
  } else if (loveFinal >= 30 && loveFinal < 50) {
    playSong("moye.mp3"); // Replace "moye.mp3" with the actual file name of your song
  } else if (loveFinal >= 50 && loveFinal < 70) {
    playSong("rafta.mp3"); // Replace "rafta.mp3" with the actual file name of your song
  } else if (loveFinal >= 70) {
    playSong("tum.mp3"); // Replace "tum.mp3" with the actual file name of your song
  }

  if (yourName === "") {
    alert("Please enter your name");
  } else if (loversName === "") {
    alert("Please enter your lover's name");
  } else if (isNotClicked) {
    document.getElementById("lovefinal").innerHTML =
      yourName + " and " + loversName + " your love score is " + loveFinal + " % ";
    isNotClicked = false;
  } else {
    document.getElementById("lovefinal").innerHTML =
      yourName + " and " + loversName + " your love score is " + loveFinal + " % ";
  }
};

// Function to play a song
function playSong(songName) {
  audio = new Audio(songName);
  audio.play();
}

// Reset button
function resetFunction() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  location.reload();
}

document.getElementById("submit").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    loveCalculator();
  },
  false
);
