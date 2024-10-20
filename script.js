const quizData = [
    {
        question: "Who was the leader of the Dacians during the wars against the Roman Empire?",
        answers: ["Decebalus", "Burebista", "Trajan", "Sarmizegetusa"],
        correctAnswerIndex: 0
    },
    {
        question: "Which Roman emperor conquered Dacia?",
        answers: ["Augustus", "Hadrian", "Trajan", "Nero"],
        correctAnswerIndex: 2
    },
    {
        question: "What was the capital of the Dacian Kingdom?",
        answers: ["Tomis", "Sarmizegetusa", "Apulum", "Napoca"],
        correctAnswerIndex: 1
    },
    {
        question: "What was the famous column built to commemorate the Roman conquest of Dacia?",
        answers: ["Hadrian's Wall", "Trajan's Column", "The Column of Constantine", "The Arch of Titus"],
        correctAnswerIndex: 1
    },
    {
        question: "In which year did the first Roman-Dacian war begin?",
        answers: ["101 AD", "89 AD", "44 AD", "106 AD"],
        correctAnswerIndex: 0
    },
    {
        question: "Which tribe did the Dacians descend from?",
        answers: ["Thracians", "Scythians", "Goths", "Celts"],
        correctAnswerIndex: 0
    },
    {
        question: "What major mountain range served as a defense for the Dacians?",
        answers: ["The Alps", "The Carpathians", "The Pyrenees", "The Balkans"],
        correctAnswerIndex: 1
    },
    {
        question: "What was the name of the Dacian god of war?",
        answers: ["Zalmoxis", "Gebeleizis", "Mars", "Apollo"],
        correctAnswerIndex: 1
    },
    {
        question: "Which Roman province was formed after the conquest of Dacia?",
        answers: ["Moesia", "Dacia", "Pannonia", "Illyricum"],
        correctAnswerIndex: 1
    },
    {
        question: "Which civilization influenced the culture and religion of the Dacians?",
        answers: ["Romans", "Greeks", "Egyptians", "Persians"],
        correctAnswerIndex: 1
    },
    {
        question: "Which Roman province bordered Dacia to the south?",
        answers: ["Moesia", "Pannonia", "Thrace", "Gallia"],
        correctAnswerIndex: 0
    },
    {
        question: "What was the primary reason for the Roman Empire's conquest of Dacia?",
        answers: ["Gold resources", "Agricultural land", "Slave labor", "Religious expansion"],
        correctAnswerIndex: 0
    },
    {
        question: "Who was the first known king of Dacia?",
        answers: ["Decebalus", "Burebista", "Cotiso", "Oroles"],
        correctAnswerIndex: 1
    },
    {
        question: "What was the major Roman city established after the conquest of Dacia?",
        answers: ["Apulum", "Napoca", "Tomis", "Tropaeum Traiani"],
        correctAnswerIndex: 0
    },
    {
        question: "What Roman military structure was built to commemorate the victory over Dacia?",
        answers: ["Trajan's Bridge", "Trajan's Forum", "Trajan's Wall", "Hadrian's Wall"],
        correctAnswerIndex: 1
    },
    {
        question: "Which Dacian settlement was known for its strategic fortifications in the Orăștie Mountains?",
        answers: ["Sarmizegetusa", "Costești", "Blidaru", "Piatra Roșie"],
        correctAnswerIndex: 0
    },
    {
        question: "What was the main religion practiced by the Dacians?",
        answers: ["Zalmoxianism", "Polytheism", "Christianity", "Judaism"],
        correctAnswerIndex: 0
    },
    {
        question: "In what year did the Roman Empire annex Dacia as a province?",
        answers: ["106 AD", "102 AD", "89 AD", "117 AD"],
        correctAnswerIndex: 0
    },
    {
        question: "Which famous Roman road connected Dacia to the rest of the empire?",
        answers: ["Via Traiana", "Via Appia", "Via Egnatia", "Via Militaris"],
        correctAnswerIndex: 0
    },
    {
        question: "What was the outcome of the Second Roman-Dacian War in 106 AD?",
        answers: ["Roman annexation of Dacia", "Dacian victory", "Peace treaty", "Stalemate"],
        correctAnswerIndex: 0
    },
    {
        question: "Which Wallachian ruler is best known for his battles against the Ottoman Empire?",
        answers: ["Mircea the Elder", "Vlad the Impaler", "Radu the Handsome", "Michael the Brave"],
        correctAnswerIndex: 1
    },
    {
        question: "What was the name of the union of the three Romanian principalities under Michael the Brave?",
        answers: ["The Romanian Union", "The Union of the Principalities", "The United Provinces", "The Union of Wallachia, Moldavia, and Transylvania"],
        correctAnswerIndex: 3
    },
    {
        question: "Which famous battle was fought between Stephen the Great of Moldavia and the Ottoman Empire in 1475?",
        answers: ["Battle of Posada", "Battle of Vaslui", "Battle of Rovine", "Battle of Călugăreni"],
        correctAnswerIndex: 1
    },
    {
        question: "Who was the ruler of Wallachia during the Battle of Călugăreni in 1595?",
        answers: ["Vladislav II", "Michael the Brave", "Stephen the Great", "Radu the Handsome"],
        correctAnswerIndex: 1
    },
    {
        question: "Which medieval Moldavian prince is known for building a series of churches and monasteries?",
        answers: ["Alexander the Good", "Stephen the Great", "Peter I", "Bogdan I"],
        correctAnswerIndex: 1
    },
    {
        question: "Which treaty signed in 1395 ensured Wallachia's independence from the Ottoman Empire for a short time?",
        answers: ["Treaty of Adrianople", "Treaty of Nicopolis", "Treaty of Brașov", "Treaty of Târgoviște"],
        correctAnswerIndex: 2
    },
    {
        question: "What year was the fall of Constantinople, marking a significant moment in the Ottoman conquest?",
        answers: ["1204", "1453", "1492", "1517"],
        correctAnswerIndex: 1
    },
    {
        question: "Which ruler is credited with uniting Wallachia, Moldavia, and Transylvania in 1600?",
        answers: ["Vlad the Impaler", "Mircea the Elder", "Stephen the Great", "Michael the Brave"],
        correctAnswerIndex: 3
    },
    {
        question: "Which 14th-century ruler is considered the founder of Moldavia?",
        answers: ["Bogdan I", "Peter I", "Alexander the Good", "Stephen the Great"],
        correctAnswerIndex: 0
    },
    {
        question: "What was the capital of Wallachia during the medieval period?",
        answers: ["Târgoviște", "Bucharest", "Iași", "Sibiu"],
        correctAnswerIndex: 0
    },
    {
        question: "Which ruler of Moldavia successfully defended the region against the Ottoman Empire at the Battle of Valea Albă in 1476?",
        answers: ["Stephen the Great", "Michael the Brave", "Radu the Handsome", "Petru Rareș"],
        correctAnswerIndex: 0
    },
    {
        question: "What was the main reason for the battle between Vlad the Impaler and the Ottoman Empire?",
        answers: ["Trade disputes", "Religion", "Tribute payment", "Territorial expansion"],
        correctAnswerIndex: 2
    },
    {
        question: "Which medieval Moldavian ruler was known for his strong diplomatic relationships with Hungary and Poland?",
        answers: ["Alexander the Good", "Stephen the Great", "Vlad the Impaler", "Michael the Brave"],
        correctAnswerIndex: 0
    },
    {
        question: "The battle of Posada in 1330, where Basarab I of Wallachia defeated the Kingdom of Hungary, established the independence of which principality?",
        answers: ["Moldavia", "Wallachia", "Transylvania", "Dobruja"],
        correctAnswerIndex: 1
    },
    {
        question: "Which Wallachian ruler was known for relocating the capital from Curtea de Argeș to Târgoviște?",
        answers: ["Neagoe Basarab", "Mircea the Elder", "Vlad the Impaler", "Radu the Handsome"],
        correctAnswerIndex: 2
    },
    {
        question: "Who succeeded Michael the Brave after his death in 1601, taking control of Wallachia?",
        answers: ["Radu Șerban", "Petru Rareș", "Alexandru Lăpușneanu", "Stephen the Great"],
        correctAnswerIndex: 0
    },
    {
        question: "Which fortress, built during the reign of Stephen the Great, played a key role in Moldavia's defense against invaders?",
        answers: ["Suceava Fortress", "Hunedoara Castle", "Poenari Fortress", "Alba Iulia Fortress"],
        correctAnswerIndex: 0
    },
    {
        question: "Which event marked the first Ottoman invasion of Moldavia?",
        answers: ["Battle of Rovine", "Battle of Baia", "Battle of Valea Albă", "Battle of Vaslui"],
        correctAnswerIndex: 2
    },
    {
        question: "Which prince of Moldavia briefly united Wallachia and Moldavia before losing power to the Ottomans in 1574?",
        answers: ["Ioan Vodă the Terrible", "Michael the Brave", "Vlad the Impaler", "Petru Rareș"],
        correctAnswerIndex: 0
    },
    {
        question: "What was the main religion of the medieval Romanian principalities?",
        answers: ["Roman Catholicism", "Eastern Orthodoxy", "Islam", "Protestantism"],
        correctAnswerIndex: 1
    },
    {
        question: "Who was the leader of Wallachia during the Battle of Posada in 1330?",
        answers: ["Basarab I", "Mircea the Elder", "Vlad the Impaler", "Michael the Brave"],
        correctAnswerIndex: 2
    },
    {
        question: "In which year did Stephen the Great defeat the Ottoman Empire at the Battle of Vaslui?",
        answers: ["1504", "1480", "1475", "1492"],
        correctAnswerIndex: 2
    },
    {
        question: "Which Romanian voivode is famous for his resistance against the Ottoman Empire and his legendary defense of Moldavia?",
        answers: ["Neagoe Basarab", "Stephen the Great", "Michael the Brave", "Vlad the Impaler"],
        correctAnswerIndex: 1
    },
    {
        question: "Which prince unified Wallachia, Moldavia, and Transylvania in 1600, creating a short-lived first union of Romanian principalities?",
        answers: ["Michael the Brave", "Radu the Handsome", "Stephen the Great", "Vlad the Impaler"],
        correctAnswerIndex: 0
    },
    {
        question: "What was the capital of Wallachia during the reign of Vlad the Impaler?",
        answers: ["Brașov", "Iași", "Târgoviște", "Bucharest"],
        correctAnswerIndex: 2
    },
    {
        question: "What was the main religious affiliation of the Romanian principalities during the Middle Ages?",
        answers: ["Protestant", "Eastern Orthodox", "Islam", "Roman Catholic"],
        correctAnswerIndex: 1
    },
    {
        question: "Which Romanian ruler was known for impaling his enemies, earning him the moniker 'The Impaler'?",
        answers: ["Stephen the Great", "Michael the Brave", "Vlad III", "Radu the Handsome"],
        correctAnswerIndex: 2
    },
    {
        question: "Who was the Ottoman Sultan that Michael the Brave fought against in the Battle of Călugăreni?",
        answers: ["Suleiman the Magnificent", "Bayezid I", "Mehmed III", "Murad IV"],
        correctAnswerIndex: 2
    },
    {
        question: "What year did the Treaty of Adrianople, recognizing Romanian autonomy under Ottoman suzerainty, take place?",
        answers: ["1575", "1600", "1711", "1829"],
        correctAnswerIndex: 3
    },
    {
        question: "What defensive tactic did Stephen the Great often employ against the invading Ottoman forces?",
        answers: ["Espionage", "Diplomacy", "Scorched Earth", "Naval Blockade"],
        correctAnswerIndex: 2
    },
    {
        question: "In which year did Romania gain its independence from the Ottoman Empire?",
        answers: ["1877", "1918", "1848", "1859"],
        correctAnswerIndex: 0
    },
    {
        question: "Who was the first King of Romania, proclaimed in 1881?",
        answers: ["King Ferdinand", "King Carol I", "King Michael I", "Alexandru Ioan Cuza"],
        correctAnswerIndex: 1
    },
    {
        question: "What was the name of the event in 1859 where Wallachia and Moldavia united to form the basis of modern Romania?",
        answers: ["The Great Union", "The Treaty of Paris", "The Union of the Principalities", "The National Awakening"],
        correctAnswerIndex: 2
    },
    {
        question: "Who was the Romanian Prime Minister during World War I, known for leading Romania into the war on the Allied side?",
        answers: ["Ion Antonescu", "Ion Brătianu", "Nicolae Ceaușescu", "Constantin Stere"],
        correctAnswerIndex: 1
    },
    {
        question: "What year marked the Great Union, when Transylvania, Bessarabia, and Bukovina united with Romania?",
        answers: ["1916", "1918", "1920", "1939"],
        correctAnswerIndex: 1
    },
    {
        question: "Which major power did Romania align with during World War II before switching sides in 1944?",
        answers: ["Soviet Union", "Nazi Germany", "United States", "United Kingdom"],
        correctAnswerIndex: 1
    },
    {
        question: "Who was the Communist leader of Romania from 1965 until his overthrow in 1989?",
        answers: ["Ion Iliescu", "Nicolae Ceaușescu", "Gheorghe Gheorghiu-Dej", "Petru Groza"],
        correctAnswerIndex: 1
    },
    {
        question: "In which year did Romania become a member of the European Union?",
        answers: ["1995", "2004", "2007", "2010"],
        correctAnswerIndex: 2
    },
    {
        question: "What was the name of the revolution that led to the fall of Nicolae Ceaușescu's regime in 1989?",
        answers: ["December Revolution", "Romanian Spring", "Bucharest Rebellion", "Transylvanian Uprising"],
        correctAnswerIndex: 0
    },
    {
        question: "Which treaty, signed in 1947, officially ended Romania's participation in World War II?",
        answers: ["Treaty of Versailles", "Treaty of Trianon", "Treaty of Paris", "Treaty of Bucharest"],
        correctAnswerIndex: 2
    },
    {
        question: "Which Romanian leader is known for initiating agricultural reforms in the 1920s?",
        answers: ["Ion I.C. Brătianu", "Mihail Kogălniceanu", "Nicolae Ceaușescu", "Constantin Argetoianu"],
        correctAnswerIndex: 0
    },
    {
        question: "In which year did the Romanian Constitution of 1923 come into effect?",
        answers: ["1923", "1918", "1945", "1938"],
        correctAnswerIndex: 0
    },
    {
        question: "Who led Romania during the process of industrialization in the late 20th century?",
        answers: ["Ion Iliescu", "Nicolae Ceaușescu", "Carol II", "Constantin Stere"],
        correctAnswerIndex: 1
    },
    {
        question: "Which event is marked by the abdication of King Michael I in Romania?",
        answers: ["Unification of Romania", "Establishment of the Romanian Republic", "End of World War II", "Great Union of 1918"],
        correctAnswerIndex: 1
    },
    {
        question: "Which treaty signed in 1920 recognized Romania's union with Transylvania?",
        answers: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Trianon", "Treaty of Bucharest"],
        correctAnswerIndex: 2
    },
    {
        question: "Which Romanian political figure became Prime Minister after the 1989 revolution?",
        answers: ["Petre Roman", "Nicolae Ceaușescu", "Ion Antonescu", "Mihai Ralea"],
        correctAnswerIndex: 0
    },
    {
        question: "What was the official name of Romania between 1965 and 1989 under the Communist regime?",
        answers: ["People's Republic of Romania", "Socialist Republic of Romania", "Democratic Republic of Romania", "Kingdom of Romania"],
        correctAnswerIndex: 1
    },
    {
        question: "What is the significance of December 1st in Romanian history?",
        answers: ["Independence Day", "National Day", "Victory Day", "Revolution Day"],
        correctAnswerIndex: 1
    },
    {
        question: "Which Romanian historical figure is most associated with land reforms and agricultural development in the 19th century?",
        answers: ["Ion Brătianu", "Alexandru Ioan Cuza", "Mihail Kogălniceanu", "Nicolae Titulescu"],
        correctAnswerIndex: 1
    },
    {
        question: "What year did Romania join NATO?",
        answers: ["2007", "2004", "1999", "2000"],
        correctAnswerIndex: 1
    }
];
console.log('quizData length:', quizData.length);
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
    quizIndex = quizIndex >= quizData.length - 1 ? 0 : quizIndex + 1;
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