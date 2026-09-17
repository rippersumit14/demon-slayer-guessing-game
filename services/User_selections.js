import questionBank from "./GetQues_with_Objects.js";

function user_answer(difficulty, questionId, userAnswer){
    const questions = questionBank();
    const selectedQuestions = questions[difficulty];

    if(!selectedQuestions){
        return "Invalid Difficulty"
    }

    const selectedQuestion = selectedQuestions.find(
        (question) => question.id === questionId
    );

    if (!selectedQuestion){
        return "Question not Found"
    }

    const correctAnswer = selectedQuestion.correctAnswer;

    if(userAnswer === correctAnswer){
        return "Correct Answer"
    } else{
        return "Incorrect answer"
    }


}

export default user_answer;