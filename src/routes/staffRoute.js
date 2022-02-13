const express = require('express');
const router = express.Router();
const app = express.Router();
const staffController = require('../controllers/staffController');
const auth = require('../middleware/auth');

router.get("/",auth, staffController.getStaffs);
router.post("/addStaff",staffController.addStaff);
router.post("/login",staffController.login);
router.put("/:id" ,auth,staffController.updateStaff);
router.delete("/:id" ,auth,staffController.deleteStaff);




module.exports= router;