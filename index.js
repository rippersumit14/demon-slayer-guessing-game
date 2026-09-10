//This is the entry point of the application
import express from "express";
import router from "./routes/Route.js";



const app = express();
const port  = 3000;


app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`App is listening to ${port}`);
});




