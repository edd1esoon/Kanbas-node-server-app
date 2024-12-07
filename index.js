import express from "express";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import session from "express-session";
import "dotenv/config";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "https://a5--kanbas-react-web-app-cs5610-24fa.netlify.app/" || "http://localhost:3000",
  })
);
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: "kanbas-node-server-app-g3f6.onrender.com",
  };
}
app.use(express.json());
app.use(session(sessionOptions));

UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app);
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
