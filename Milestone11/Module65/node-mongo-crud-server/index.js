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
        const user = { name: 'tisha', email: 'jahanarayeasmin@gmail.com' }
        const result = await userCollection.insertOne(user)
        console.log(result);
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