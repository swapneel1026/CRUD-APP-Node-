import express from "express";
import {
  HandlePostNewUser,
  handleDeleteUserById,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
} from "../controllers/user.controller.js";
const router = express.Router();

router.get("/", handleGetAllUsers).post("/", HandlePostNewUser);
router
  .get("/:id", handleGetUserById)
  .patch("/:id", handleUpdateUserById)
  .delete("/:id", handleDeleteUserById);

export default router;
