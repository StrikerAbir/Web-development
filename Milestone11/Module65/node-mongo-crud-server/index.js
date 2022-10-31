const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 1000;
const { MongoClient, ServerApiVersion } = require("mongodb");

// middleware
app.use(cors());
app.use(express.json());

// user = dbuser2
// password = 7xntWtKWH2Ciqrpo


const uri =
  "mongodb+srv://dbuser2:7xntWtKWH2Ciqrpo@cluster0.nvx6pod.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
    try {
        const userCollection = client.db('nodeMongoCrud').collection('users');

      app.get('/users', async (req, res) => {
        const query = {};
        const cursor = userCollection.find(query);
        const user = await cursor.toArray();
        res.send(user);
      })
      app.post('/users', async(req, res) => {
        const user = req.body;
        console.log(user);
        const result =await userCollection.insertOne(user)
        res.send(result);
        })
    } finally {
       
    }
}
run().catch(err => console.log(err))


app.get('/',(req,res)=>{
    res.send('hello form mongo node')
})

app.listen(port, () => {
    console.log(`port ${port} is running`);
})