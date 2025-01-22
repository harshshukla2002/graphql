const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running", success: true });
});

app.listen(4000, async () => {
  await mongoose.connect(
    "mongodb+srv://harshshukla:harsh12@cluster0.ob6lhlw.mongodb.net/graphql"
  );
  console.log(`server started at http://localhost:4000/`);
});
