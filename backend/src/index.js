require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const userRouter = require('./routes/userRouter');
const genreRouter = require('./routes/genreRouter');
const actorRouter = require('./routes/actorRouter');
const reviewRouter = require('./routes/reviewRouter');
const profileRouter = require('./routes/profileRouter');
const filmRouter = require('./routes/filmRouter');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/user', userRouter);
app.use('/genre', genreRouter);
app.use('/actor', actorRouter);
app.use('/review', reviewRouter);
app.use('/profile', profileRouter);
app.use('/film', filmRouter);

app.listen(process.env.SERVER_PORT, () => {console.log('Server Running')});
