// All of the individual sounds
const sound1 = new Audio("sounds/sound1.mp3");
const sound2 = new Audio("sounds/sound2.mp3");
const sound3 = new Audio("sounds/sound3.mp3");
const sound4 = new Audio("sounds/sound4.mp3");

// Puts all the sounds together in one array
const sounds = [sound1, sound2, sound3, sound4];

// Gets a random number
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Plays the sound at a random index of the sounds array
function playRandomSound() {
  // 5 because that's the number of sounds in the array
  let randomIndex = getRandomInt(4);
  let randomSound = sounds[randomIndex];
  randomSound.play();
}
