import express from "express";

import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

// get all Users
router.get("/", getUsers);

//create a new User
router.post("/", createUser);

// get specific User
router.get("/:id", getUser);

// delete specific user
router.delete("/:id", deleteUser);

// Edit Details of specific user
router.patch("/:id", updateUser);

export default router;
