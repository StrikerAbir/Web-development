const express = require('express');
const app = express();
const port = process.env.PORT || 1000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('simple node server running');
})

const users = [
    {id:1, name:'hinata', email:'hinataWifu@gmail.com'},
    {id:1, name:'zero2', email:'zero2Wifu@gmail.com'},
    {id:1, name:'hancock', email:'hancockWifu@gmail.com'},
]

app.get("/users", (req, res) => {
    if (req.query.name) {
        // filter by query
        const search= req.query.name
        const filtered = users.filter(user => user.name.toLowerCase().indexOf(search)>=0)
        res.send(filtered);
    } else {
        
        res.send(users);
    }
});

app.post('/users', (req, res) => {
    console.log('user post api called');
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})


// listen
app.listen(port, () => {
    console.log(`port ${port} running...`);
})