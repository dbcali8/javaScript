const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  // get random number between 0 - 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  // modify the background color of the document body
  document.body.style.backgroundColor = colors[randomNumber];
  // display the background color "#..." of the body
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  // round down the random number
  return Math.floor(Math.random() * colors.length);
}
