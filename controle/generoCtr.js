var genero=require("../modelo/genero")
function listar(req,res){
    genero.find({}).lean().exec(function(err,docs){
        res.render('genero/list.ejs',{"Generos":docs})
    })
}
function filtrar(req,res){

}
function abrirAdicinar(req,res){
    res.render("genero/add.ejs")
}
function adiciona(req,res){
    var  novoGenero=new genero({
        nome: req.body.nome
    })
    novoGenero.save(function(err){
        if(err){
            genero.find({}).lean().exec(function(err,docs){
                res.render('genero/list.ejs',{msg:"Problema ao Salvar!",Generos:docs})
            })
        }else{
            genero.find({}).lean().exec(function(err,docs){
                res.render('genero/list.ejs',{msg:"Adicionado com Sucesso!!",Generos:docs})
            })
        }
    })
}
function abrirEdita(req,res){

}
function edita(req,res){

}
function deleta(rec,res){

}
module.exports={
    listar,
    filtrar,
    abrirAdicinar,
    adiciona,
    abrirEdita,
    edita,
    deleta
}