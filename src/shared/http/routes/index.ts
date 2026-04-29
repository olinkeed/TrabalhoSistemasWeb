import atletasRouter from "@modules/atletas/routes/atletas.routes";
import { Router } from "express";

const routes = Router();

routes.use("/atletas", atletasRouter);

routes.get("/", (request, response) => {
  return response.json({ message: "API de Atletas - Online!" });
});

export default routes;
