import express from "express";
import * as admin from "firebase-admin";
import credentials from "../credentials.json";

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const users = {
  oGomuoI1WXbPcclXPoKShix7GvH2: {
    name: "Srun",
    bio: "I like to program!",
  },
  jN8PAmDULaZWO6CSKEHv8P3bzJA2: {
    name: "Dara",
    bio: "I like to program!",
  },
};

const app = express();
app.use(express.json());

app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const user = users[userId];

  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

app.post("/users", (req, res) => {
  const { id, userInfo } = req.body;
  users[id] = userInfo;
  res.sendStatus(200);
});

app.put("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const { updates } = req.body;
  const user = users[userId];

  if (user) {
    const updateUser = {
      ...user,
      ...updates,
    };

    users[userId] = updateUser;
    res.json(updateUser);
  } else {
    res.sendStatus(404);
  }
});

app.delete("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const user = users[userId];

  if (user) {
    delete users[userId];
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

app.listen(8080, () => {
  console.log("Server is listen on port 8080");
});
