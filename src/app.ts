import express from 'express'
import cors from 'cors'
import { routes } from './routes/routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(routes.CargosRotas)
app.use(routes.VozesRotas)
app.use(routes.InstrumentosRotas)

export { app }