// Makes sure script is loaded
console.log("quizEngine loaded");

// Answers are stored in place and captured as an option is selected
export const NUM_QUESTIONS = 14;

export function buildCountsArray(answers) {
    // A, B, C, D
    const counts = [0, 0, 0, 0]; 

    for (const a of answers) {
        switch (a[0]) {
            case "A":
            counts[0]++;
            break;
        case "B":
            counts[1]++;
            break;
        case "C":
            counts[2]++;
            break;
        case "D":
            counts[3]++;
            break;
        }
    }
    return counts;
}