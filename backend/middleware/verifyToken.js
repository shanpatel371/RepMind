// backend/middleware/verifyToken.js
const admin = require('../firebaseAdmin');

async function verifyToken(req, res, next) {
  console.log("Incoming Headers:", req.headers); // <-- Add here
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send("Missing token");

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
}

module.exports = verifyToken;
