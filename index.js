const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "I am using node today! Feeling excited. Node is installed. It will monitor the changes."
  );
});

const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com", phone: "0178888888" },
  { id: 2, name: "bobita", email: "bobita@gmail.com", phone: "0178888888" },
  { id: 3, name: "moushumi", email: "moushumi@gmail.com", phone: "0178888888" },
  {
    id: 4,
    name: "rituporna",
    email: "rituporna@gmail.com",
    phone: "0178888888",
  },
  { id: 5, name: "katrina", email: "katrina@gmail.com", phone: "0178888888" },
  { id: 6, name: "dany", email: "dany@gmail.com", phone: "0178888888" },
];

app.get("/users", (req, res) => {
  //filter by search query parameter
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
  // console.log(req.query);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
