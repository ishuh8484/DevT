const express = require("express");
const { adminAuth, userAuth } = require("./middleware/auth");

const app = express();

app.use("/admin", adminAuth);

// app.use("/user", userAuth);

app.get("/user/addUser", [
  userAuth,
  (req, res, next) => {
    res.send("added user");
  },
]);

app.get("/admin/getAllData", (req, res, next) => {
  next(); // Proceed to the next middleware or route handler
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("deleted user");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
