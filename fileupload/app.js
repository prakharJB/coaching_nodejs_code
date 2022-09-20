import express from "express";
import connectDB from './db/connectdb.js';
import web from './routes/web.js';
const app = express();
const port = process.env.PORT || '3001';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";


//Database Connection
connectDB(DATABASE_URL);

//Set Template Engine
app.set('view engine', 'ejs');

app.use(express.static("uploads"));


app.use(express.urlencoded({ extended: true }));

//Load Routes
app.use('/', web);

app.listen(port, ()=> {
    console.log(`Server is listening at http://localhost:${port}`);
});