var express=require('express')
var route=express.Router()
var generoCtr=require('../controle/generoCtr')
//rota para listar todos
route.get('/',generoCtr.listar)
//rota para listrar por filtro
route.post('/',generoCtr.filtrar)
//rota para abrir o adicionar
route.get('/add',generoCtr.abrirAdicinar)
//rota para adicionar
route.post('/add',generoCtr.adiciona)
//rota para abrir o edita
route.get('/edit/:id',generoCtr.abrirEdita)
//rota para edita
route.post('/edit/:id',generoCtr.edita)
//rota para deletar
route.get('/del/:id',generoCtr.deleta)
module.exports=route;
