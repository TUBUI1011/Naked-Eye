import express from "express";
import visionRoutes from "./routes/vision.routes";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/vision", visionRoutes);

app.use(errorHandler);

export default app;