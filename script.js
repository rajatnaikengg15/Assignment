// Selecting DOM elements
const form = document.querySelector('form');
const passwordInput = document.querySelector('input[type=password]');
const centerCircle = document.querySelector('.center-circle');
const leftDoor = document.querySelector('.left-door');
const rightDoor = document.querySelector('.right-door');
const timer = document.querySelector('.timer');

// Setting time limit in seconds
const timeLimit = 300; // 5 minutes

// Initializing remaining time to timeLimit
let remainingTime = timeLimit;

// Function to display remaining time in minutes:seconds format
function displayTime() {
  const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0');
  const seconds = (remainingTime % 60).toString().padStart(2, '0');
  timer.textContent = `${minutes}:${seconds}`;
}

// Function to start the countdown timer
function startTimer() {
  displayTime();
  const interval = setInterval(() => {
    remainingTime--;
    displayTime();
    if (remainingTime === 0) {
      clearInterval(interval);
      alert('Your time limit has expired. You have been automatically logged out.');
      window.location.reload();
    }
  }, 1000);
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const password = passwordInput.value.trim();
  if (password === 'rajat') {
    // Password is correct
    centerCircle.classList.add('rotate-fade');
    leftDoor.classList.add('slide-left');
    rightDoor.classList.add('slide-right');
    setTimeout(() => {
      form.style.display = 'none';
      startTimer();
    }, 4000);
  } else {
    // Password is incorrect
    alert('Incorrect password. Please try again.');
  }
}

// Adding event listener for form submission
form.addEventListener('submit', handleSubmit);

