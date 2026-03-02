// Makes sure script is loaded
console.log("quizApp loaded");

import { NUM_QUESTIONS, buildCountsArray } from "./quizEngine.js";

// Answers are stored in place and captured as an option is selected
const answers = Array(NUM_QUESTIONS).fill(null);

const form = document.getElementById("quiz-form");
// Safety check
if (!form) {
    console.error("Invalid form id.");
}

// Captures answer choice selection live
form.addEventListener("change", (e) => {
    const el = e.target;

    // This part makes sure the event is the radio input
    if (!(el instanceof HTMLInputElement)) return;
    if (el.type !== "radio" || !el.checked){
        console.error("Event is not a radio, or it hasn't been checked.");
        return;
    }

    // Ensures name of element is in the form of qx where x is the question number
    const match = el.name.match(/^q(\d+)$/);
    if (!match) {
        console.error(`Question name is ${el.name}, which isn't in the format of qx(x is the question number).`);
        return;
    }

    const qNum = Number(match[1]);
    if (qNum < 1 || qNum > NUM_QUESTIONS) {
        console.error(`Question number is ${qnum}, which is invalid.`);
        return;
    }

    // Stores "A", "B", "C", or "D"
    answers[qNum - 1] = el.value;

    // Debug: watch state change live
    console.log("Answers:", answers);
});

// Submit Button Logic
form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    // Safety Check (should already be covered by require, not sure if it's needed may remove later)
    const missing = answers
        .map((v, i) => (v === null ? i + 1 : null))
        .filter(Boolean);
    if (missing.length) {
        console.error(`Missing answers for questions: ${missing.join(", ")}`);
        alert("Please answer all questions before submitting.");
        return;
    }

    // Sanity Check
    console.log("Final answers:", answers);

    // Builds counts array [A, B, C, D]
    const counts = buildCountsArray(answers);
    // Sanity Check
    console.log("counts: ", counts)
});