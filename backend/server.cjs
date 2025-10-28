const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, "db", "enquiries.json");

// Ensure DB file exists
if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, "[]");

// POST: Submit a new query or booking
app.post("/api/submit", (req, res) => {
  const { name, email, bookingType, service, message } = req.body;

  if (!name || !email || !service) {
    return res.status(400).json({ message: "Please fill all required fields." });
  }

  const newEntry = {
    id: Date.now(),
    name,
    email,
    bookingType,
    service,
    message,
    date: new Date().toISOString()
  };

  const existing = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
  existing.push(newEntry);
  fs.writeFileSync(dbPath, JSON.stringify(existing, null, 2));

  res.json({ message: "✅ Submission received successfully!" });
});

// GET: Retrieve all enquiries
app.get("/api/enquiries", (req, res) => {
  const data = fs.readFileSync(dbPath, "utf-8");
  res.json(JSON.parse(data));
});

// DELETE: Remove one entry
app.delete("/api/enquiries/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
  const filtered = data.filter(item => item.id !== id);
  fs.writeFileSync(dbPath, JSON.stringify(filtered, null, 2));
  res.json({ message: "🗑️ Entry deleted successfully!" });
});

// DELETE: Clear all entries
app.delete("/api/enquiries", (req, res) => {
  fs.writeFileSync(dbPath, "[]");
  res.json({ message: "🧹 All entries cleared!" });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀VividSync-Studio Server running on http://localhost:${PORT}`));
