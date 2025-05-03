const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdmin = token === "xyz";
  if (!isAdmin) {
    res.status(401).send("error! admin not authorised"); // Proceed to the next middleware or route handler
  } else {
    console.log("Middleware executed for all routes");
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "xyzsjibssb";
  const isAdmin = token === "xyz";
  if (!isAdmin) {
    res.status(401).send("error! admin not authorised"); // Proceed to the next middleware or route handler
  } else {
    console.log("Middleware executed for all routes for userAuth");
    next();
  }
};
module.exports = { adminAuth, userAuth };
