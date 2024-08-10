import express from "express";
import { visitorsData } from "../controllers/visitors.js";

const router = express();

router.post('/visitors', visitorsData);

export default router;