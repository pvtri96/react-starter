const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getDelay } = require("./config");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require("./userModule");

const app = express();
const port = 2996;

app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  await wait();
  res.send("Hello World!");
});

app.get("/api/users", async (req, res) => {
  await wait();
  res.json(getAllUsers());
});

app.get("/api/user/:id", async (req, res) => {
  await wait();
  res.json(getUserById(Number(req.params.id)));
});

app.post("/api/user", async (req, res) => {
  await wait();
  const user = req.body;
  res.json(createUser(user));
});

app.put("/api/user/:id", async (req, res) => {
  await wait();
  const user = req.body;
  res.json(updateUserById(Number(req.params.id), user));
});

app.delete("/api/user/:id", async (req, res) => {
  await wait();
  res.json(deleteUserById(Number(req.params.id)));
});

function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, getDelay());
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
