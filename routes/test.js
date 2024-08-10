import express from "express";
import { test } from "../controllers/test.js";

const router = express();

router.post('/test',test);

export default router;