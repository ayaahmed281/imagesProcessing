import express, {Application } from 'express';
import { imageProcessingRoute } from './routes/resizing';

 const app:Application = express();

app.listen("54242", () => {
  console.log(`Server is starting at prot:${54242}`);
});


app.get("/");

app.use('/resizing', imageProcessingRoute);
export default app;