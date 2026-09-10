import express from "express";
import displayQuestion from "../services/GetQuestionaire.js";

const router = express.Router();

router.get("/questions/:difficulty", (req, res) => {
    const difficulty = req.params.difficulty;

    const question = displayQuestion(difficulty);

    if (question === "InvalidDifficulty"){
        return res.status(400).json({
            error: "Invalid difficulty"
        });
    }

    return res.status(200).json({
        difficulty: difficulty,
        question: question,
    });
});

export default router;
 