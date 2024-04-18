const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');

const routes = require("./src/routes/routes")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL

app.use(cors());
app.use(express.json());

app.use("/", routes)

mongoose.connect(MONGO_URL)
.then(()=> console.log("MongoDb is connect✔️"))
.catch(err => console.log("error occered while connecting to mongo", err))

app.listen(PORT, () => {
    console.log(`Express is running on port ${PORT}🏃‍♂️🏃‍♂️🏃‍♂️`);
})