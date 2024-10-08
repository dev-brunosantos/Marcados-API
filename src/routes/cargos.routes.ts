import { Router } from "express";
import { CargosControllers } from "../controllers/CargosControlles";
import { VozesControllers } from "../controllers/VozesControllers";
import { InstrumentosControllers } from "../controllers/InstrumentosControllers";

const CargosRotas = Router()
const VozesRotas = Router()
const InstrumentosRotas = Router()

// ROTAS DE CARGOS
CargosRotas.post('/cargos/criar', CargosControllers.CriarCargo)
CargosRotas.get('/cargos', CargosControllers.ListarCargos)
CargosRotas.get('/cargos/:cargo', CargosControllers.BuscarCargo)

// ROTAS DE NAIPES DE VOZES
VozesRotas.post('/cargos/criar', VozesControllers.CriarNaipe)
VozesRotas.get('/cargos', VozesControllers.Naipes)
VozesRotas.get('/cargos/:cargo', VozesControllers.BuscarNaipe)

// ROTAS DE NAIPES DE INSTUMENTOS
InstrumentosRotas.post('/cargos/criar', InstrumentosControllers.CriarCategoria)
InstrumentosRotas.get('/cargos', InstrumentosControllers.ListarCategorias)
InstrumentosRotas.get('/cargos/:cargo', InstrumentosControllers.BuscarInstrumentos)

export { CargosRotas, VozesRotas, InstrumentosRotas }