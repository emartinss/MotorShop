import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { usersRoute } from "./routes/users/users.route";

import { errorHandlerMiddleware } from "./middlewares/handleErrors.middleware";
import { loginRoute } from "./routes/login/login.route";
import { announcementRoute } from "./routes/announcement/announcement.route";

const app = express();
const cors = require("cors");
app.use(cors({ origin: "http://localhost:5173" }), express.json());

app.use("/users", usersRoute); 
app.use("/login", loginRoute);  
app.use("/announcements", announcementRoute);  

app.use(errorHandlerMiddleware);

export default app;
