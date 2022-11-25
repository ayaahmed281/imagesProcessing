import express, { Router } from "express";
import imageProcessing from "../../utilities/middleware/imageProcessing";
export const imageProcessingRoute: Router = express.Router();

imageProcessingRoute.get("/", imageProcessing, async () => {
  console.log("fetch image");
});
