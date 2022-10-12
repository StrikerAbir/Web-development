const express = require('express');
const app = express();
// const port = process.env.PORT || 1000;  etaw use kore,
const port = 1000;

app.get('/', (req, res) => {
    res.send('Hello|World')
})

app.listen(port, () => {
    console.log(`server running ${port}`)
})