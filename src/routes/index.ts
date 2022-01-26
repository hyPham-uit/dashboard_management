import express from "express";
import PingController from "../controllers/ping.controller";
import PostRouter from "./post.router";
import UserRouter from "./user.router";

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.use("/users", UserRouter)
router.use("/tasks", PostRouter)
router.use("/dashboards", PostRouter)
router.use("/contacts", PostRouter)
router.use("/auth", PostRouter)
router.use("/report", PostRouter)

export default router;
