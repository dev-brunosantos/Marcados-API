import { Router } from "express";
import { NaipeController } from "../controllers/Naipe.controller";

const NaipeRotas = Router()

const naipeHttp = "naipes"

NaipeRotas.post(`/${naipeHttp}`, NaipeController.Criar)

NaipeRotas.get(`/${naipeHttp}`, NaipeController.ListarNaipes)

NaipeRotas.get(`/${naipeHttp}/:id`, NaipeController.NaipeID)

NaipeRotas.patch(`/${naipeHttp}/:id`, NaipeController.Editar)

NaipeRotas.delete(`/${naipeHttp}/:id`, NaipeController.Apagar)

export { NaipeRotas }