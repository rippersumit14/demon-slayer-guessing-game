import React, { useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const difficulties = ["easy", "medium", "hard"];
const descriptions = [
  "Begin your journey",
  "Sharpen your instincts",
  "Prove your mastery",
];

async function request(path, options) {
  const response = await fetch(path, options);
  if (!response.ok) throw new Error("The request failed. Please try again.");
  return response.json();
}

function App() {
  const [screen, setScreen] = useState("start");
  const [difficulty, setDifficulty] = useState("easy");
  const [question, setQuestion] = useState(null);
  const [selection, setSelection] = useState("");
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  // A synchronous lock also guards fast repeated clicks before React re-renders.
  const requestInProgress = useRef(false);

  function chooseDifficulty() {
    if (requestInProgress.current) return;
    setScore(0);
    setAnswered(0);
    setQuestion(null);
    setSelection("");
    setResult(null);
    setError("");
    setScreen("difficulty");
  }

  async function nextQuestion(level = difficulty) {
    if (requestInProgress.current) return;
    requestInProgress.current = true;
    setBusy(true);
    setError("");
    setScreen("quiz");
    setDifficulty(level);
    try {
      const data = await request(`/questions/${level}`);
      const item = data.question;
      if (
        !item ||
        !Number.isInteger(item.id) ||
        typeof item.question !== "string" ||
        !Array.isArray(item.options) ||
        item.options.length !== 4 ||
        !item.options.every((option) => typeof option === "string")
      ) {
        throw new Error(
          "The server returned an unexpected question. Please try again.",
        );
      }
      // Deliberately copy only display fields; never use GET's correctAnswer.
      setQuestion({ id: item.id, text: item.question, options: item.options });
      setSelection("");
      setResult(null);
    } catch (err) {
      setError(
        err instanceof TypeError || err instanceof SyntaxError
          ? "Could not reach the quiz. Check that the backend is running on port 3000, then try again."
          : err.message,
      );
    } finally {
      requestInProgress.current = false;
      setBusy(false);
    }
  }

  async function submitAnswer(event) {
    event.preventDefault();
    if (!selection || !question || result !== null || requestInProgress.current)
      return;
    requestInProgress.current = true;
    setBusy(true);
    setError("");
    try {
      const data = await request(`/questions/${difficulty}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId: question.id, answer: selection }),
      });
      if (
        data.result !== "Correct Answer" &&
        data.result !== "Incorrect answer"
      ) {
        throw new Error(
          "The server could not check this answer. Please try again.",
        );
      }
      const correct = data.result === "Correct Answer";
      setResult(correct);
      setScore((current) => current + (correct ? 1 : 0));
      setAnswered((current) => current + 1);
    } catch (err) {
      setError(
        err instanceof TypeError || err instanceof SyntaxError
          ? "Could not submit your answer. Check the backend connection and try again."
          : err.message,
      );
    } finally {
      requestInProgress.current = false;
      setBusy(false);
    }
  }

  return (
    <div className={`app ${screen === "start" ? "opening" : ""}`}>
      <header className="brand">
        <span className="brand-mark" aria-hidden="true">
          滅
        </span>
        <span>
          DEMON SLAYER<span className="brand-sub">THE KNOWLEDGE CHALLENGE</span>
        </span>
      </header>
      <main>
        {screen === "start" && (
          <section className="intro" aria-labelledby="intro-title">
            <p className="eyebrow">
              <span /> YOUR JOURNEY BEGINS HERE
            </p>
            <h1 id="intro-title">
              Demon Slayer<span>Guessing Game</span>
            </h1>
            <p className="intro-copy">
              Test your knowledge of the Demon Slayer universe.
              <br />
              Every slayer starts somewhere.
            </p>
            <button className="primary start-button" onClick={chooseDifficulty}>
              START QUIZ <span aria-hidden="true">↗</span>
            </button>
            <p className="intro-note">
              3 difficulties <span>·</span> One world to discover
            </p>
          </section>
        )}

        {screen === "difficulty" && (
          <section
            className="card difficulty-card"
            aria-labelledby="difficulty-title"
          >
            <p className="eyebrow">THE FIRST STEP</p>
            <h1 id="difficulty-title">Choose Difficulty</h1>
            <p className="muted">How well do you know this world?</p>
            <div className="difficulty-list">
              {difficulties.map((level, index) => (
                <button
                  className="difficulty-option"
                  key={level}
                  onClick={() => nextQuestion(level)}
                >
                  <span className="level-number">0{index + 1}</span>
                  <span>
                    <strong>{level.toUpperCase()}</strong>
                    <small>{descriptions[index]}</small>
                  </span>
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </button>
              ))}
            </div>
            <button className="text-button" onClick={() => setScreen("start")}>
              ← Back
            </button>
          </section>
        )}

        {screen === "quiz" && (
          <section
            className="card quiz-card"
            aria-label="Quiz"
            aria-busy={busy}
          >
            <div className="stats">
              <span className="badge">{difficulty}</span>
              <span>
                Score: <strong>{score}</strong>
              </span>
            </div>
            <p className="question-count">Questions Answered: {answered}</p>
            {question && (
              <form onSubmit={submitAnswer}>
                <fieldset disabled={busy || result !== null}>
                  <legend>{question.text}</legend>
                  <div className="options">
                    {question.options.map((option, index) => (
                      <label
                        className={`option ${selection === option ? "selected" : ""}`}
                        key={option}
                      >
                        <input
                          type="radio"
                          name="answer"
                          value={option}
                          checked={selection === option}
                          onChange={() => setSelection(option)}
                        />
                        <span className="option-letter" aria-hidden="true">
                          {"ABCD"[index]}
                        </span>
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                {result === null && (
                  <button
                    className="primary full"
                    type="submit"
                    disabled={!selection || busy}
                  >
                    {busy ? "PLEASE WAIT…" : "Submit Answer"}
                    <span aria-hidden="true">→</span>
                  </button>
                )}
              </form>
            )}
            {!question && busy && (
              <p role="status" className="loading">
                Finding your next challenge…
              </p>
            )}
            {result !== null && (
              <div
                className={`feedback ${result ? "correct" : "incorrect"}`}
                role="status"
              >
                <strong>
                  {result ? "✓ Correct Answer" : "× Incorrect Answer"}
                </strong>
                <span>
                  {result
                    ? "+1 point. Well done, slayer."
                    : "Keep going. Your journey continues."}
                </span>
              </div>
            )}
            {error && (
              <p className="error" role="alert">
                {error}
              </p>
            )}
            {result !== null && (
              <button
                className="primary full"
                disabled={busy}
                onClick={() => nextQuestion()}
              >
                {busy ? "LOADING…" : "Next Question"}
                <span aria-hidden="true">→</span>
              </button>
            )}
            {!question && !busy && (
              <button className="primary full" onClick={() => nextQuestion()}>
                Try Again
              </button>
            )}
            <div className="quiz-bottom">
              <span>No timer. Take a breath.</span>
              <button
                className="text-button"
                disabled={busy}
                onClick={chooseDifficulty}
              >
                Change difficulty / Restart
              </button>
            </div>
          </section>
        )}
      </main>
      <footer>
        <span>UNOFFICIAL FAN-MADE QUIZ</span>
        <span>Inspired by Demon Slayer · Made for learning</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
