import express from "express";
import dotenv from "dotenv/config";
import dbconnection from "./connection.js";
import userRouter from "./routes/user.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

//DB-CONNECTION
dbconnection("mongodb://localhost:27017/project-CRUD");

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
