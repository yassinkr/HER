const express = require("express");
const router = express.Router();
const { getUsers } = require("../Controller/UserController");
const { createUser } = require("../Controller/UserController");
const { SignInUser } = require("../Controller/UserController");






router.get("/get", getUsers);
router.post("/signin", SignInUser);
router.post("/create", createUser);
module.exports = router;
