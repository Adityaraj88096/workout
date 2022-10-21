const Express = require('express');
const app = Express();
const cors = require('cors');
const connectDB = require('./db/db')
const exerciseRouter = require('./routes/exercise.router');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
connectDB();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send(`Your API is working.....Great. Build on.`);
});
app.use(exerciseRouter)

app.listen(port, () => {
    console.log(`Your backend server has started`)
});