const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config();

const app = express();

app.use(express.json())
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database is connected!"))
    .catch(err => console.error(err))



const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("server running on port 8080")
})