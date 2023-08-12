const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');  
const mongoose = require('mongoose');
const router = require('./router/index'); 
require('dotenv').config();

mongoose
    .connect(process.env.DB_URL)
    .then((res)=> console.log('Connected to DB'))
    .catch((err)=> console.log(err))

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api', router);
const PORT = process.env.PORT || 3002;

app.listen(PORT, (error) => {
    error? console.log(error): console.log(`listen localhost${PORT}`)
});