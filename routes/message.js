import express from "express";
import { visitorsMessage } from "../controllers/message.js";


const router = express();

router.post('/message',visitorsMessage);

export default router;