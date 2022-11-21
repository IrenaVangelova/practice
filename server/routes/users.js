var express = require('express');
var router = express.Router();
const controller = require("../controllers/users");

/* GET users listing. */
router.get("/all", controller.getAllUsers);
router.post("/register", controller.register);
// router.post("/login", controller.login);
router.get("/:id", controller.byId);
// router.post("/:id/update", upload.single('image'), controller.update);

module.exports = router;
