import express, { Request, Response } from 'express'
import cors from 'cors'
import { routes } from './routes/routes'
import { EscalasController } from './controllers/Escalas.controller'
import { EscalasServices } from './services/Escalas.service'
import { prismaConfig } from './config/prismaConfig'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(routes.CargosRotas)
app.use(routes.NaipeRotas)
app.use(routes.UsuarioRotas)

app.post('/escalas', EscalasController.CriarEscalas)
app.get('/escalas', EscalasController.ListarEscalas)
app.get('/escalas/culto', EscalasController.BuscarCulto)
app.get('/teste', async (req: Request, res: Response) => {

    const { id, posicao } = req.body

    try {
        const { escalas } = prismaConfig;

        const buscarTeste = await escalas.findFirst({
            where: { id: { equals: id, mode: 'insensitive' } }
        })

        if (buscarTeste) {
            return res.json(buscarTeste.teclado[Number(posicao) - 1])
        }
        return res.json({ erro: "Não encontramos a escala informada." })
    } catch (error) {
        return res.json({ erro: error })
    }
})

app.patch('/escalas', EscalasController.EditarEscala)
app.delete('/escalas', EscalasController.ApagarEscala)

export { app }