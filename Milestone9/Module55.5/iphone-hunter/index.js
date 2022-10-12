const express = require('express');
const app = express();
const port = 1000;
const phones = require('./phones.json')
const cors=require('cors')

app.use(cors());

app.get('/', (req, res) => {
    res.send('iphone: is here server now running')
})

// phone data api
app.get('/phones', (req, res) => {
    res.send(phones)
})

// single data loaded
app.get('/phones/:id', (req, res) => {
  const id = parseInt(req.params.id); // request use hoi kono dynamic value nite

  console.log("looking for data for id:", id);

  const phone = phones.find((ph) => ph.id === id) || {};
  res.send(phone); //respond use hoi show korate
})


app.listen(port, () => {
    console.log('port chole');
})