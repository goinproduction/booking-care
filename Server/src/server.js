import express from 'express';
import bodyParser from 'body-parser'; // Lay res, req
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
import cors from 'cors';

require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// config app
viewEngine(app);
initWebRoutes(app);

connectDB();

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
});
