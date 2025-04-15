const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const weatherRoute = require('./routes/weather');

dotenv.config();

const app = express();
const path = require("path");


app.use(cors());
app.use(express.json());
const _dirname = path.dirname("");
const buildpath = path.join(_dirname,"../client/build");
app.use(express.static(buildpath)); 

app.use('/weather', weatherRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));