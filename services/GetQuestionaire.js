import questionBank from "./questionaire.js";

function displayQuestion(difficulty) {
    const questions = questionBank();
    const selectedQuestions = questions[difficulty];

    if (!selectedQuestions){
        return "InvalidDifficulty";
    }

    const randomIndex = Math.floor(
        Math.random() * selectedQuestions.length
    );

    return selectedQuestions[randomIndex];

}

export default displayQuestion;


