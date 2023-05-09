import { Router } from "express";
import {
  createCourse,
  getCourses,
  storeCourse,
} from "../controllers/course_controller";

const courseRoutes = Router();
courseRoutes.get("/create", createCourse);
courseRoutes.post("/store", storeCourse);
courseRoutes.get("/", getCourses);

export default courseRoutes;
