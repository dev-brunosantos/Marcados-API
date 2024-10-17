import { Router } from "express";
import { UsuarioControllers } from "../controllers/UsuariosControllers";

const UsuarioRotas = Router()

UsuarioRotas.post('/usuarios/cadastrar', UsuarioControllers.NovoUsuario)
UsuarioRotas.post('/usuarios/cadastrar', UsuarioControllers.ListarUsuarios)
UsuarioRotas.post('/usuarios/cadastrar', UsuarioControllers.BuscarUsuarioID)
UsuarioRotas.post('/usuarios/cadastrar', UsuarioControllers.BuscarUsuarioNome)
UsuarioRotas.post('/usuarios/cadastrar', UsuarioControllers.BuscarEmailUsuario)
UsuarioRotas.post('/usuarios/cadastrar', UsuarioControllers.BuscarUsuarioCargo)

export { UsuarioRotas }