//This is the entry point of the application
import express from express;

const app = express();
const port  = 3000;

app.listen(port, () => {
    console.log(`App is listening to ${port}`);
});

