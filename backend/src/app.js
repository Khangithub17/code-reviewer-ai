const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const aiRoutes = require('./routes/ai.routes');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(express.json());

app.use('/ai', aiRoutes);


module.exports = app;