import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello server" });
});

const port = process.env.PORT || 5173;

app.listen(port, () => {
  console.log(`server running on port ${port} hello`);
});
