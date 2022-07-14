const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cardsRouter = require('./routers/cardsRouter');
const uploadRoute = require('./routers/uploadRouter');

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

app.use('api/cards', cardsRouter);

app.use('/api/files', express.static(path.join(__dirname, 'public/images')));
app.use('/api/upload', uploadRoute);

mongoose.connect(process.env.MONGO_URL, () => {
  console.log('Connected to mongoDB');
});

app.listen(9000, () => {
  console.log('App started ap port 9000');
});
