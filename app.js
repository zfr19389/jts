const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const bills = require('./routes/bills');
const payments = require('./routes/payment');
const recordEntry = require('./routes/recordEntry');
const expense = require('./routes/expense');
var mongoose = require('mongoose');
const app = express();
 
mongoose.connect('mongodb://jts_naseem:01091974@ds131989.mlab.com:31989/janatatransport');

mongoose.connection.on('connected', ()=> {
    console.log("MongoDB connected");
});

mongoose.connection.on('error', (err)=> {
    console.log(err);
});

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/bills', bills); 
app.use('/recordEntry', recordEntry);
app.use('/payments', payments);
app.use('/expense', expense);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public/index.html'))
});

app.get('/', (req, res) => {
    res.send("something happened");
});

const PORT = process.env.PORT || 8080;
 
app.set('PORT', PORT);

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Running on localhost:${PORT}`));