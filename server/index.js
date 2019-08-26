import express from "express";
import dotenv from "dotenv";
import path from "path";

const port = process.env.PORT || 5001;
const app = express();
dotenv.config();

app.use(express.static(path.resolve(__dirname, "../dist")));

app.listen(port, () => {
  console.log(`app is running in port ${port}`);
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist/index.html"));
  });
});
