const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
const itemsRoute = require("./routes/itemsRoute");
const usersRoute = require("./routes/userRoute");
const billsRoute = require('./routes/billsRoute');
app.use("/api/items/", itemsRoute);
app.use("/api/users/", usersRoute);
app.use("/api/bills/", billsRoute);
const path = require('path');
const { log } = require("console");
app.use(cors({ origin: 'https://shop-dusky-two.vercel.app' })); // Set the allowed origin here

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
});

app.get("/", (req, res) => res.send("Hello World! from home api"));
