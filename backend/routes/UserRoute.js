import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/UserController.js";

const router = express.Router();

router.get("/user/", getUsers);
router.get("/user/:id", getUser);
router.post("/user/", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router; 