const express = require("express"); // express import
const app = express(); // express call
// const port = process.env.PORT || 1000;  etaw use kore,
const port = 1000; // port set

// api banao
app.get("/", (req, res) => {
  // get korbe ‘/’, and and akta callback function jar paramete akta request r akta respond
  res.send("Hello|World"); //respond a hellow world send kore disi
});

app.listen(port, () => {
  // ekhane port dite hoi r chaile arrow funciton o dite pari jate bojha jai j port kaj korse kina.
  console.log(`server running ${port}`);
});
