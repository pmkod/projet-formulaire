import express from "express";
import {
  createCourse,
  getCourses,
  storeCourse,
} from "./controllers/course_controller";
import { login } from "./controllers/auth_controller";
import courseRoutes from "./routes/course_routes";
import authRoutes from "./routes/auth_routes";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.use("/courses", courseRoutes);

app.get("/auth", authRoutes);

const port = 8000;

app.listen(port, () => {
  console.log("Server running on port ", port);
});
