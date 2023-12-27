const jwt = require("jsonwebtoken");

const config = process.env;

const authMiddleware = (req, res, next) => {
  const token = req.headers["x-access-token"]; //req.body.token || req.query.token ||   

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  
  try {
    const decoded = jwt.verify(token, config.JWT_TOKEN_KEY);
    req.user = decoded;

  } catch (error) {
    console.log(error)
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default authMiddleware;