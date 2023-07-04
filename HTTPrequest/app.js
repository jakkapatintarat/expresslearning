// HTTP request

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/resource', (req, res) => {
    const myJson = {id:1, name:"Jakkapat"};
    res.send(myJson);
});

app.listen(3000, () => {
    console.log('running on port 3000');
});