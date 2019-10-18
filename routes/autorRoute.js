var express=require('express')
var route=express.Router()
var autorCtr=require('../controle/autorCtr')
var multer=require('../config/multerConfig')
//rota para listar todos
route.get('/',autorCtr.listar)
//rota para listrar por filtro
route.post('/',autorCtr.filtrar)
//rota para abrir o adicionar
route.get('/add',autorCtr.abrirAdicinar)
//rota para adicionar
route.post('/add',multer.single('foto'),autorCtr.adiciona)
//rota para abrir o edita
route.get('/edit/:id',autorCtr.abrirEdita)
//rota para edita
route.post('/edit/:id',autorCtr.edita)
//rota para deletar
route.get('/del/:id',autorCtr.deleta)
module.exports=route;