require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const userRouter = require('./routes/userRouter')
const genreRouter = require('./routes/genreRouter')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

// app.use('/', router);
app.use('/user', userRouter)
app.use('/genre', genreRouter)

app.listen(process.env.SERVER_PORT, () => {console.log('Server Running')});
