import { Router } from "express";
import { CargosControllers } from "../controllers/CargosControlles";

const CargosRotas = Router()

// ROTAS DE CARGOS
CargosRotas.post('/cargos/criar', CargosControllers.CriarCargo)
CargosRotas.get('/cargos', CargosControllers.ListarCargos)
CargosRotas.get('/cargos/:cargo', CargosControllers.BuscarCargo)

export { CargosRotas }