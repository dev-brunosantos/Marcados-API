import { Router } from "express";
import { UsuarioController } from "../controllers/Usuarios.controller";

const UsuarioRotas = Router()

const usuarioHttp = "usuarios"

UsuarioRotas.post(`/${usuarioHttp}`, UsuarioController.Cadastrar) 
UsuarioRotas.get(`/${usuarioHttp}`, UsuarioController.Listar) 
UsuarioRotas.get(`/${usuarioHttp}/usuario_id`, UsuarioController.UsuarioId) 
UsuarioRotas.post(`/${usuarioHttp}/:nome`, UsuarioController.UsuarioNome) 
UsuarioRotas.patch(`/${usuarioHttp}/editar/:id`, UsuarioController.EditarUsuario) 

export { UsuarioRotas }