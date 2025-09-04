const quiz = [
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Styled Sections"], answer: 0 },
    { question: "Which language runs in a web browser?", options: ["Java", "C", "JavaScript"], answer: 2 },
    { question: "What year was JavaScript created?", options: ["1995", "2000", "2010"], answer: 0 }
];
let current = 0;
let score = 0;
function loadQuestion() {
    if (!document.getElementById("question")) return; // ensure element exists
    document.getElementById("question").textContent = quiz[current].question;
    let optionsHTML = "";
    quiz[current].options.forEach((opt, i) => {
        optionsHTML += `<label><input type="radio" name="option" value="${i}"> ${opt}</label><br>`;
    });
    document.getElementById("options").innerHTML = optionsHTML;
}
function nextQuestion() {
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected && parseInt(selected.value) === quiz[current].answer) {
        score++;
    }
    current++;
    if (current < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").innerHTML = `<h2>You scored ${score} out of ${quiz.length}</h2>`;
    }
}
document.addEventListener("DOMContentLoaded", loadQuestion);
async function getJoke() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        document.getElementById("joke").innerHTML = `${data.setup} <br><b>${data.punchline}</b>`;
    } catch (error) {
        document.getElementById("joke").textContent = "Failed to fetch joke!";
    }
}
