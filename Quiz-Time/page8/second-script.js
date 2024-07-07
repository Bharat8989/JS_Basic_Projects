// second-script.js
const timeCount = document.querySelector('.timer-count');
const backgroundColor = document.querySelector('.second-page');
let count = 60;

function updateTimer() {
    timeCount.textContent = `Time left: ${count}`;
    count--;

    if (count === 30) {
        // Change color when 30 seconds remain
        backgroundColor.style.backgroundColor = 'yellow-green';
    } else if (count === 10) {
        // Change color when 10 seconds remain
        backgroundColor.style.backgroundColor = 'pink';
    }

    if (count >= 0) {
        setTimeout(updateTimer, 1000); // Update every second
    } else {
        alert("Time is Up!");
    }
}

updateTimer();

const optionButtons = document.querySelectorAll('.option-button');
const correctAnswer = 'B'; // Replace with the actual correct answer for the first question
let selectedOption = null; // Initialize as no option selected
const feedbackDiv = document.querySelector('.feedback'); // Add a feedback div in your HTML
const userAnswers = []; // Initialize an empty array to store user answers

// Add event listeners to option buttons
optionButtons.forEach((button) => {
    button.addEventListener('click', handleOptionClick);
});

function handleOptionClick(event) {
    const clickedOption = event.target.dataset.option;

    // Deselect the previously selected option (if any)
    if (selectedOption) {
        document.querySelector(`[data-option="${selectedOption}"]`).style.backgroundColor = '';
    }

    // Update the selected option
    selectedOption = clickedOption;

    if (selectedOption === correctAnswer) {
        // Correct option selected, change color to green
        event.target.style.backgroundColor = 'green';
        // feedbackDiv.textContent = 'Correct! 🎉';
    } else {
        // Incorrect option selected, change color to red
        event.target.style.backgroundColor = 'green';
        // feedbackDiv.textContent = 'Oops, try again!';
    }

    // Store the user's answer
    userAnswers.push(selectedOption);
}

function checkAnswers() {
    const correctAnswers = ['A']; // Add correct answers for all questions
    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            score++;
        }
    }
    const resultDiv = document.querySelector('.result');
    resultDiv.textContent = `You scored ${score} out of ${correctAnswers.length}!`;
}

// Call this function after the user has answered all questions
// For example, you can call checkAnswers() when the user clicks the "Next" button on the last question
document.querySelector('.next-button').addEventListener('click', () => {
    checkAnswers();
});
