import express from 'express'
import cors from 'cors'
import testRoutes from './routes/test.js'
import visitorRoutes from './routes/visitor.js'
import visitorMessageRoutes from './routes/message.js'

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.use(testRoutes);
app.use(visitorRoutes);
app.use(visitorMessageRoutes);

app.listen(port, ()=>{
    console.log("Server running on port -> ", port);
})