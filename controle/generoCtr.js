var genero=require("../modelo/genero")
function listar(req,res){
    genero.find({}).lean().exec(function(err,docs){
        res.render('genero/list.ejs',{"Generos":docs})
    })
}
function filtrar(req,res){
    genero.find({nome:new RegExp(req.body.pesquisa,'i')}).lean().exec(function(err,docs){
        res.render('genero/list.ejs',{"Generos":docs})
    })
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
    genero.findById(req.params.id,function(err,genero){
        res.render('genero/edit.ejs',{'genero':genero});
    })
}
function edita(req,res){
    genero.findByIdAndUpdate(req.params.id,{nome:req.body.nome},function(err){
        if(err){
            genero.find({}).lean().exec(function(err,docs){
            res.render('genero/list.ejs',{msg:"Problema ao Editar!",Generos:docs})
            })
        }else{
            genero.find({}).lean().exec(function(err,docs){
            res.render('genero/list.ejs',{msg:"Editado com Sucesso!!",Generos:docs})
            })
        }
    })
}
function deleta(req,res){
    genero.findByIdAndDelete(req.params.id,function(){
        genero.find({}).lean().exec(function(err,docs){
        res.render('genero/list.ejs',{msg:"Removido com Sucesso!!",Generos:docs})
        })
    })
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