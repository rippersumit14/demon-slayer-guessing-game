# Demon Slayer Guessing Game

## Project Overview

A small backend-focused learning project with a minimal React interface. Choose a difficulty, answer random Demon Slayer questions, and track your current session score.

The backend was developed manually as part of backend development practice.

This is an unofficial fan-made educational project inspired by Demon Slayer and is not affiliated with or endorsed by the original creators or rightsholders.

## Learning Purpose

Practice JavaScript, Node.js, Express.js, REST APIs, routing, `req.params`, `req.body`, validation, objects, arrays, `Array.find()`, and Postman API testing. The frontend also demonstrates React state and `fetch()`.

## Features

- Cinematic start screen with local generated fan artwork and a dark gradient fallback.
- Easy, Medium, and Hard difficulty selection.
- Random questions, four selectable options, and backend-driven feedback.
- Frontend score, questions-answered count, Next Question, and restart/change difficulty.
- Loading states, retryable errors, keyboard support, responsive layout, and reduced-motion support.

## Tech Stack

Backend: JavaScript ES modules, Node.js, Express.js, and the existing nodemon dependency. Frontend: React, React DOM, Vite, and plain CSS. No state-management library or database.

## Backend

`index.js` runs Express on port **3000**. `routes/Route.js` defines the API. The files in `services/` contain random selection, the question bank, and answer checking. All existing backend files and dependencies were left unchanged when adding the frontend. There is no backend scoring or authentication.

## Frontend

Everything is isolated under `frontend/`:

- `src/main.jsx`: one React component, API requests, and session state.
- `src/styles.css`: responsive styling and small transitions.
- `public/slayer-background.png`: local AI-generated fan illustration, not official artwork.
- `vite.config.js`: development/preview proxies forwarding `/questions` to port 3000.
- `index.html`, `package.json`, `package-lock.json`, `.gitignore`: entry point, frontend dependencies, and generated-file exclusions.
- `ARTWORK.md`: generation tool and exact artwork prompt.

Google Fonts are optional; system fonts work if the font service is unavailable.

## API Endpoints

### GET `/questions/:difficulty`

Use `easy`, `medium`, or `hard`. Example response:

```json
{
  "difficulty": "easy",
  "question": {
    "id": 1,
    "question": "What is the name of Tanjiro Kamado's younger sister?",
    "options": ["Nezuko Kamado", "Shinobu Kocho", "Tamayo", "Kanao Tsuyuri"],
    "correctAnswer": "Nezuko Kamado"
  }
}
```

GET currently exposes `correctAnswer`. The frontend neither displays nor uses it for grading, but it remains visible in network responses. Removing it is a future manual backend exercise.

### POST `/questions/:difficulty`

Send `Content-Type: application/json`, a numeric question ID, and the exact option text:

```json
{ "questionId": 1, "answer": "Nezuko Kamado" }
```

Example response:

```json
{
  "difficulty": "easy",
  "answer": "Nezuko Kamado",
  "questionId": 1,
  "result": "Correct Answer"
}
```

An incorrect answer returns `"result": "Incorrect answer"` (lowercase `answer`). React checks these exact POST strings. Missing question ID or a falsy answer returns HTTP 400 with an `error` field.

### Existing API Issues — Not Modified

- GET exposes `correctAnswer` as described above.
- Invalid GET difficulty returns service text `"Invalid Difficulty"`, but the route checks `"InvalidDifficulty"`; the request returns HTTP 200 instead of the intended 400.
- POST returns HTTP 200 even for `"Invalid Difficulty"` and `"Question not Found"`. The frontend treats unexpected results as errors without changing the score.
- POST checks only missing IDs and falsy answers; stricter type and option validation is a possible learning exercise.
- All current correct options are first in their arrays. The frontend preserves the backend's order.

## Quiz Flow

1. Press **Start Quiz** and choose a difficulty.
2. Fetch a question, select one option, and press **Submit Answer**.
3. Read **Correct Answer** or **Incorrect Answer**, based entirely on POST.
4. Press **Next Question** to fetch another random question at the same difficulty.
5. Use **Change difficulty / Restart** to reset and select a new session.

The quiz is open-ended. There is no timer or fixed ending. Random questions can repeat because the backend samples independently.

## Scoring

A correct answer adds **1** point; an incorrect answer adds **0**. Each successfully checked submission increments **Questions Answered** once. Submitted options lock until Next Question, and repeated clicks cannot score the current submission again. A repeated random question is a new round. Failed requests do not change either counter.

Scores exist only in React component state. Restarting, changing difficulty, or refreshing resets them. There is no persistence or leaderboard.

## Difficulty Levels

| Level | Questions | Focus |
| --- | --- | --- |
| Easy | 10 | Main characters and basic lore |
| Medium | 10 | Hashira, mentors, and story details |
| Hard | 10 | Upper ranks and deeper lore |

## Local Setup

Use Node.js **22.12+** (Node 24 also works) and npm. In WSL/Linux:

```bash
cd /home/sumit/demon_slayer_project
npm install
cd frontend
npm install
```

Root and frontend dependencies have separate package manifests and lockfiles.

## How to Run Backend

In terminal 1:

```bash
cd /home/sumit/demon_slayer_project
node index.js
```

The API runs on **http://localhost:3000**. Optionally use `npx nodemon index.js` for the existing watcher. The root package has no `start` script.

## How to Run Frontend

In terminal 2, while Express is running:

```bash
cd /home/sumit/demon_slayer_project/frontend
npm run dev
```

Open **http://localhost:5173**. Run both processes in the same environment, such as WSL. Vite forwards `/questions` to Express, so backend CORS changes are unnecessary. Stop a process with Ctrl+C.

To build and preview locally:

```bash
cd /home/sumit/demon_slayer_project/frontend
npm run build
npm run preview
```

Open **http://localhost:4173** with Express still running. Build output goes to `frontend/dist/`. For eventual deployment, configure a same-origin `/questions` reverse proxy; the Vite proxy works only in development/local preview. Opening `dist/index.html` directly is unsupported.

## Future Improvements

- Manually remove answer exposure and improve validation/status codes.
- Shuffle options and avoid repeated questions.
- Add an optional fixed-length session and result screen.
- Practice automated backend tests; the existing root `npm test` is a placeholder.

These are ideas, not implemented features.
