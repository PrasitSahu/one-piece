// imports
require('dotenv').config()
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const path = require("path");
const schema = require("./model/graphql");
const db = require('mongoose')

// variables
const PORT = 8000;
const app = express();

// database connection
const connection = db.connect(process.env.DB_URI)
connection.then((data) => {
  console.log('connected to database!')
})
.catch((err) => {
  throw Error(`Error: ${err}`)
})

// middlewares
app.use("/", express.static(path.join(__dirname, "../client", "build")));
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// routing
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
