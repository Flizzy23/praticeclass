// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Dummy user (replace with DB or hashed passwords in real life)
const users = [
  { email: "test@example.com", password: "123456" },
  { email: "user@example.com", password: "password" },
];

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    return res.json({ success: true, message: "Login successful" });
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
