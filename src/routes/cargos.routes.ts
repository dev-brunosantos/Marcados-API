import { Router } from "express";
import { CargosControllers } from "../controllers/CargosControlles";

const CargosRotas = Router()

const cargoHttp = "cargos"

// ROTAS DE CARGOS
CargosRotas.post(`/${cargoHttp}`, CargosControllers.CriarCargo)

CargosRotas.get(`/${cargoHttp}`, CargosControllers.ListarCargos)

CargosRotas.get(`/${cargoHttp}/:id`, CargosControllers.BuscarCargoId)

// CargosRotas.get(`/${cargoHttp}/:cargo`, CargosControllers.BuscarCargo)

CargosRotas.patch(`/${cargoHttp}/:id`, CargosControllers.EditarCargo)

CargosRotas.delete(`/${cargoHttp}/:id`, CargosControllers.ApagarCargo)

export { CargosRotas }