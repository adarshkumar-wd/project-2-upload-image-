import express from "express";
import dotenv from "dotenv";
import pictureRoute from "./src/routes/pictute.route.js";
import { dbConnection } from "./src/db/dbConnection.js";
import cors from "cors";


dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use("/api/picture", pictureRoute);

dbConnection().then(() => {
  app.listen(3000, () => {    
    console.log("Server is running on port 3000");
  });
}).catch((error) => {
  console.error("Error connecting to database:", error);
});

