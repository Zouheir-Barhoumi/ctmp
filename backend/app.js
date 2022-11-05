const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  cors = require("cors"),
  { requireAuth, checkUser } = require("./authMiddleware");
app = express();
require("dotenv").config({ path: ".env" });

// CORS && MIDDLEWARE
// MIDDLEWARE
// parses the body of the http request
app.use(bodyParser.json()); // request handler: "middleware that only parses json"
app.use(cookieParser());

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,PATCH,OPTIONS,HEAD"
  );
  //   For fetch
  res.header(
    "Access-Control-Allow-Headers",
    "auth-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// WHITE LIST ORIGIN FOR FETCH (FROM CHROME)
const whitelist = ["http://localhost:8080", "http://localhost:5050"];
const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) return callback(null, true);

    callback(new Error("Not allowed by CORS"));
  },
};
// app.use(cors(corsOptions));

// DB
const uri = process.env.URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("MongoDB connection established"))
  .catch((err) => console.log(err));

// ROOT
app.get("/", (req, res) => {
  res.send("HOMES... Sherlock Holmes");
});

// Routes
const tasksRoute = require("./routes/Tasks");
const listsRoute = require("./routes/Lists");
const projectsRoute = require("./routes/Projects");
const teamsRoute = require("./routes/Teams");
const usersRoute = require("./routes/Users");

// app.get("*", requireAuth);
app.use("/tasks", tasksRoute);
app.use("/lists", listsRoute);
app.use("/projects", projectsRoute);
app.use("/teams", teamsRoute);
app.use("/users", usersRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`I AM LISTENING on port ${PORT}!`);
});
