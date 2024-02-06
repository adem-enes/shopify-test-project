const PORT = 5000;
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import globalsRoute from './routes/globals.js';
import productsRoute from './routes/products.js';

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true, parameterLimit: 50000 }));

app.use('/globals', globalsRoute);
app.use('/products', productsRoute);


app.get("/", (req, res) => {
    res.send("<h1>Welcome to Solverhood Study Case By Adem Enes Polat</h1>");
});

app.listen(PORT, (req, res) => {
    console.log(`Server Running on -> http://localhost:${PORT}`);
});