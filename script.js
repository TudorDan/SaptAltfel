const quizData = [
    {
        question: "Who was the first President of the United States?",
        answers: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
        correctAnswerIndex: 0
    },
    {
        question: "Which year did World War II begin?",
        answers: ["1914", "1939", "1945", "1963"],
        correctAnswerIndex: 1
    },
    {
        question: "Which ancient civilization built the pyramids?",
        answers: ["Romans", "Greeks", "Egyptians", "Mayans"],
        correctAnswerIndex: 2
    },
    {
        question: "In what year was the Declaration of Independence signed?",
        answers: ["1776", "1783", "1801", "1812"],
        correctAnswerIndex: 0
    }
];
let quizIndex = 0;  // Start with the first question

// Define teams and colors
// Array of colors to use for teams
const colors = [
    'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan',
    'brown', 'teal', 'lime', 'magenta', 'indigo', 'violet', 'gold', 'silver',
    'coral', 'crimson', 'navy', 'turquoise', 'olive', 'maroon', 'salmon',
    'khaki', 'plum', 'orchid', 'sienna', 'peach', 'lavender', 'aqua'
];
let teams = [];  // This will hold the array of teams
let numTeams = 0;

// Get modal elements
const modal = document.getElementById("teamModal");
const closeModalBtn = document.getElementsByClassName("close")[0];
const submitTeamsBtn = document.getElementById("submitTeamsBtn");
const teamCountInput = document.getElementById("teamCountInput");

// Show the modal (you can call this when the page loads or via a button)
function showModal() {
    modal.style.display = "block";
}

// Close the modal when the 'x' is clicked
closeModalBtn.onclick = function () {
    modal.style.display = "none";
};

// Close the modal if user clicks anywhere outside the modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// When the user submits the number of teams
submitTeamsBtn.onclick = function () {
    numTeams = parseInt(teamCountInput.value);
    if (!isNaN(numTeams) && numTeams > 0) {
        modal.style.display = "none";
        createTeams(numTeams);  // You can create the inputs for the teams now
    } else {
        alert("Please enter a valid number of teams.");
    }
};

// Function to create team objects and UI
function createTeams(numberOfTeams) {
    teams = []; // Clear the existing teams array

    for (let i = 0; i < numberOfTeams; i++) {
        const teamName = prompt(`Enter name for Team ${i + 1}:`) || `Team ${i + 1}`;
        const teamColor = colors[i % colors.length]; // Cycle through predefined colors

        // Add the team to the array
        teams.push({
            name: teamName,
            color: teamColor
        });
    }

    // Generate team color boxes and labels in the upper right corner
    const teamColorsGroup = document.getElementById('teamColors');
    teamColorsGroup.innerHTML = ''; // Clear the existing elements

    for (let i = 0; i < teams.length; i++) {
        const team = teams[i];

        // Create the team color box
        const teamColorBox = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        teamColorBox.setAttribute('width', '20');
        teamColorBox.setAttribute('height', '20');
        teamColorBox.setAttribute('fill', team.color);
        teamColorBox.setAttribute('class', 'team-color');
        teamColorBox.setAttribute('data-team', team.name);
        teamColorBox.setAttribute('y', i * 30); // Space the boxes vertically

        // Add event listener to change activeColor when a team color is clicked
        teamColorBox.addEventListener('click', function () {
            activeColor = this.getAttribute('fill');
            console.log(`Selected team: ${team.name}, Selected color: ${activeColor}`);
        });

        // Add team color box to the group
        teamColorsGroup.appendChild(teamColorBox);

        // Create the team label
        const teamLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        teamLabel.setAttribute('x', 25);
        teamLabel.setAttribute('y', (i * 30) + 15);
        teamLabel.textContent = team.name;

        // Add team label to the group
        teamColorsGroup.appendChild(teamLabel);
    }

    // Position the team color palette in the upper right corner
    teamColorsGroup.setAttribute('transform', 'translate(1000, 20)');
}

// Store the currently selected color
let activeColor = '';

// Add event listener for clicking on a county (path)
document.querySelectorAll('path').forEach(county => {
    county.addEventListener('click', function () {
        if (activeColor) {
            // Force fill by setting it via style and attribute
            this.style.fill = activeColor;
            this.setAttribute('fill', activeColor);  // Apply the selected color to the clicked county
        } else {
            alert('No team color selected');
        }
    });
});

// Get quiz modal elements
const quizModal = document.getElementById("quizModal");
const closeQuizBtn = document.getElementsByClassName("close")[0]; // Since you have class 'close' for closing buttons
const quizQuestionEl = document.getElementById("quizQuestion");
const answersContainer = document.getElementById("answersContainer"); // This ID should match the one in your HTML

// Function to show quiz modal
function showQuizModal(questionIndex) {
    const currentQuestion = quizData[questionIndex];

    // Set question text
    quizQuestionEl.textContent = currentQuestion.question;

    // Clear previous answers
    answersContainer.innerHTML = '';

    // Dynamically generate answer buttons
    currentQuestion.answers.forEach((answer, index) => {
        const answerBtn = document.createElement('button');
        answerBtn.textContent = answer;
        answerBtn.classList.add('answer-btn');

        // Add click event to check if it's the correct answer
        answerBtn.addEventListener('click', function () {
            if (index === currentQuestion.correctAnswerIndex) {
                alert('Correct!');
            } else {
                alert('Incorrect. The correct answer is: ' + currentQuestion.answers[currentQuestion.correctAnswerIndex]);
            }
            quizModal.style.display = 'none'; // Close modal after answering
        });

        answersContainer.appendChild(answerBtn);
    });

    // Display the quiz modal
    quizModal.style.display = "block";
}

// Close the quiz modal on clicking close button
document.querySelector('#quizModal .close').onclick = function () {
    quizModal.style.display = "none";
};

// Optional: Close the modal if the user clicks outside of the modal
window.onclick = function (event) {
    if (event.target === quizModal) {
        quizModal.style.display = 'none';
    }
};


// Example function to trigger the quiz (you can replace this with your game logic)
function startQuiz() {
    /* const randomQuestionIndex = Math.floor(Math.random() * quizData.length); */
    showQuizModal(quizIndex); // Show a random question from quizData
    quizIndex++;
}

// Function to add a "Quiz" button to the top-left of the map
function addQuizButton() {
    const svg = document.querySelector('svg'); // Select your SVG element

    // Create the "Quiz" button
    const quizButton = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    quizButton.setAttribute('x', 20);  // Set X position
    quizButton.setAttribute('y', 40);  // Set Y position
    quizButton.setAttribute('fill', 'black');  // Text color
    quizButton.setAttribute('font-size', '20');  // Font size
    quizButton.setAttribute('cursor', 'pointer'); // Make it look like clickable

    quizButton.textContent = 'Quiz';  // Set the text content

    // Add click event to trigger the quiz modal
    quizButton.addEventListener('click', function () {
        startQuiz();  // Start the quiz when the "Quiz" button is clicked
    });

    // Append the "Quiz" button to the SVG
    svg.appendChild(quizButton);
}

// Call the function to add the "Quiz" button after the page loads
addQuizButton();

showModal();