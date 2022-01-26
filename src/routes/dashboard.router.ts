import express from "express";
import DashboardController from "../controllers/dashboard.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new DashboardController();
  const response = await controller.getDashboards();
  return res.send(response);
});

router.put("/:id", async (req, res) => {
  const controller = new DashboardController();
  const response = await controller.updateDashboard(req.params.id, req.body);
  if (!response) res.status(404).send({ message: "No contact found" });
  return res.send(response);
});
