import questionBank from "./GetQues_with_Objects.js";

function displayQuestion(difficulty){
    const questions = questionBank();
    const selectedQuestions = questions[difficulty];

    if (!selectedQuestions){
        return "Invalid Difficulty";
    }

    const randomIndex = Math.floor(
        Math.random() * selectedQuestions.length
    );

    return selectedQuestions[randomIndex];
}

export default displayQuestion;
