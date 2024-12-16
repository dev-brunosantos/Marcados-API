import express, { Request, Response } from 'express'
import cors from 'cors'
import { routes } from './routes/routes'
import { EscalasController } from './controllers/Escalas.controller'
import { EscalasServices } from './services/Escalas.service'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(routes.CargosRotas)
app.use(routes.NaipeRotas)
app.use(routes.UsuarioRotas)

app.post('/escalas', EscalasController.CriarEscalas)
app.get('/escalas', EscalasController.ListarEscalas)

export { app }