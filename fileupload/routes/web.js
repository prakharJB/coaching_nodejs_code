import express from "express";
const router = express.Router();
import UserController from "../controllers/userController.js";

router.get('/', UserController.home);
router.post('/upload', UserController.submit);
router.get('/image', UserController.getAllDoc);
// router.get('/registration', UserController.registration);
// router.post('/upload', UserController.createUserDoc);
// router.post('/login', UserController.verifyLogin);

export default router;