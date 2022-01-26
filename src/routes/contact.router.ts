import express from "express";
import ContactController from "../controllers/contact.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new ContactController();
  const response = await controller.getContacts();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new ContactController();
  const response = await controller.createContact(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new ContactController();
  const response = await controller.getContact(req.params.id);
  if (!response) res.status(404).send({ message: "No contact found" });
  return res.send(response);
});

router.put("/:id", async (req, res) => {
  const controller = new ContactController();
  const response = await controller.updateContact(req.params.id, req.body);
  if (!response) res.status(404).send({ message: "No contact found" });
  return res.send(response);
});

router.delete("/:id", async (req, res) => {
  const controller = new ContactController();
  const response = await controller.deleteContact(req.params.id);
  if (!response) res.status(404).send({ message: "No contact found" });
  return res.send(response);
});

export default router;
