import express from "express";
import db from "./config/database.mjs";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();


try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.log("Unable to connect to the database:", error);
}

app.use(cors());
app.use(express.json());
app.use( '/product',routes);



app.listen(5000, () => 
  console.log("Server is running on port 5000"));
