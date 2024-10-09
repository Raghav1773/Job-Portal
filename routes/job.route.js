import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
<<<<<<< HEAD
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";
=======
import { postJob } from "../controllers/job.controller.js";
>>>>>>> 35f12573d06c8c24b9ad35712196c6ec77136a47

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
<<<<<<< HEAD
router.route("/getadminjobs").post(isAuthenticated, getAdminJobs);
router.route("/id/:id").post(isAuthenticated, getJobById);
=======
router.route("/post").post(isAuthenticated, postJob);
router.route("/post").post(isAuthenticated, postJob);
>>>>>>> 35f12573d06c8c24b9ad35712196c6ec77136a47


export default router;