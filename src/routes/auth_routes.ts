import { Request, Response, Router } from "express";
import { login } from "../controllers/auth_controller";

const authRoutes = Router();

authRoutes.get("/login", login);

export default authRoutes;
