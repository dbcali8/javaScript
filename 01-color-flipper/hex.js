// hex array will provide 6 values for the hex value of the color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  // the hash tag '#' needs to come prior to the 6 hex values
  let hexColor = '#';
  // setting up a for loop to get 6 values from the hex array
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // setting text content and background color the hex value
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// getRandomNumber function will round down the random number, which is multiplied by the hex length
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
