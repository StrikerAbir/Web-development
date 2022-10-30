const express = require("express");
const app = express();
const port = process.env.PORT || 1000;
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

app.use(cors());
app.use(express.json());

// user : dbUser1
// password : fLE1x3B5DBR1DZPt
const uri =
  "mongodb+srv://dbUser1:fLE1x3B5DBR1DZPt@cluster0.nvx6pod.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const userCollection = client.db("simpleNode").collection("users");
    // const user = { name: "mihit", email: "12@gmail.com" };
    // const result = await userCollection.insertOne(user);
    // console.log(result);
      app.post("/users", async (req, res) => {
        console.log("user post api called");
        const user = req.body;
        // user.id = users.length + 1;
        // users.push(user);
          const result = await userCollection.insertOne(user);
          console.log(result);
          user.id = result.insertedId;
        res.send(user);
      });
  } finally {
  }
}

run().catch((err) => console.log(err));

// client.connect((err) => {
//   const collection = client.db("simpleNode").collection("users");
//   // perform actions on the collection object
//   console.log("database connected");
//   client.close();
// });

app.get("/", (req, res) => {
  res.send("simple node server running");
});

const users = [
  { id: 1, name: "hinata", email: "hinataWifu@gmail.com" },
  { id: 1, name: "zero2", email: "zero2Wifu@gmail.com" },
  { id: 1, name: "hancock", email: "hancockWifu@gmail.com" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    // filter by query
    const search = req.query.name;
    const filtered = users.filter(
      (user) => user.name.toLowerCase().indexOf(search) >= 0
    );
    res.send(filtered);
  } else {
    res.send(users);
  }
});

// app.post("/users", (req, res) => {
//   console.log("user post api called");
//   const user = req.body;
//   user.id = users.length + 1;
//   users.push(user);
//   res.send(user);
// });

// listen
app.listen(port, () => {
  console.log(`port ${port} running...`);
});
