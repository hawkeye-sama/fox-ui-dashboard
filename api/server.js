const express = require("express");
const app = express();
//const connectDb = require("./src/connection");
//const User = require("./src/User.model");

const PORT = 8086;

// app.get("/users", async (req, res) => {
//   const users = await User.find();

//   res.json(users);
// });

// app.get("/user-create", async (req, res) => {
//   const user = new User({ username: "userTest" });

//   await user.save().then(() => console.log("User created"));

//   res.send("User created \n");
// });
app.get("/",(req,res)=>{
  res.send("testing")
})

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  // connectDb().then(() => {
  //   console.log("MongoDb connected");
  // });
});
