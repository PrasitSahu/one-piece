// imports
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const path = require("path");
const schema = require("./model/graphql");

// variables
const PORT = 8000;
const app = express();

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
