import { Router } from "express";
import { NaipeController } from "../controllers/Naipe.controller";

const NaipeRotas = Router()

const naipeHttp = "naipes"

NaipeRotas.post(`/${naipeHttp}`, NaipeController.Criar)

NaipeRotas.post(`/${naipeHttp}`, NaipeController.ListarNaipes)

NaipeRotas.post(`/${naipeHttp}`, NaipeController.NaipeID)

NaipeRotas.post(`/${naipeHttp}`, NaipeController.Editar)

NaipeRotas.post(`/${naipeHttp}`, NaipeController.Apagar)

export { NaipeRotas }