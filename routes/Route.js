import express from "express";
import displayQuestion from "../services/GetQuestionaire.js";
import user_answer from "../services/User_selections.js";

const router = express.Router();

router.get("/questions/:difficulty",  (req, res) => {
    const difficulty = req.params.difficulty;

    const question = displayQuestion(difficulty)

    if (question === "InvalidDifficulty"){
        return res.status(400).json({
            error: "Invalid Difficulty"
        });
    }

    return res.status(200).json({
        difficulty: difficulty,
        question: question,
    });

});


router.post("/questions/:difficulty", (req, res) => {
    const difficulty = req.params.difficulty;

    const { answer, questionId } = req.body;

    if (questionId === undefined) {
        return res.status(400).json({
            error: "Question ID is required"
        });
    }

    if (!answer) {
        return res.status(400).json({
            error: "Answer is required"
        });
    }

    const result = user_answer(difficulty, questionId, answer);

    return res.status(200).json({
        difficulty: difficulty,
        answer: answer,
        questionId: questionId,
        result: result
    });
});

export default router