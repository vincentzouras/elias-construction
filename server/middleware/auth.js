import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;

const authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers["api-key"];

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(403).send("unauthorized access");
  }

  next();
};

export default authenticateApiKey;
