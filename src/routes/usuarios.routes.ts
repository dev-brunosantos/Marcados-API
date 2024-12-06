import { Router } from "express";
import { UsuarioController } from "../controllers/Usuarios.controller";

const UsuarioRotas = Router()

const usuarioHttp = "usuarios"

UsuarioRotas.post(`/${usuarioHttp}`, UsuarioController.Cadastrar) 
UsuarioRotas.post(`/${usuarioHttp}`, UsuarioController.Listar) 

export { UsuarioRotas }