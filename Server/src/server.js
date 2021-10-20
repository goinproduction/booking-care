require('dotenv').config();
const express = require('express');
const cors = require('cors');
const viewEngine = require('./config/viewEngine');
const route = require('./route');
const connectToDatabase = require('./config/connectDB');

connectToDatabase();

const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
viewEngine(app);
route(app);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
