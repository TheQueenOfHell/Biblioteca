var autor=require("../modelo/autor")
function listar(req,res){
    autor.find({}).lean().exec(function(err,docs){
        res.render('autor/list.ejs',{"Autores":docs})
    })
}
function filtrar(req,res){
    autor.find({nome:new RegExp(req.body.pesquisa,'i')}).lean().exec(function(err,docs){
        res.render('autor/list.ejs',{"Autores":docs})
    })
}
function abrirAdicinar(req,res){
    res.render("autor/add.ejs")
}
function adiciona(req,res){
    var  novoAutor=new autor({
        nome: req.body.nome,
        nacionalidade:req.body.nacionalidade,
        datanasc:req.body.datanasc,
        foto:req.file.filename
    })
    novoAutor.save(function(err){
        if(err){
            autor.find({}).lean().exec(function(err,docs){
            res.render('autor/list.ejs',{msg:"Problema ao Salvar!",Autores:docs})
            })
        }else{
            autor.find({}).lean().exec(function(err,docs){
            res.render('autor/list.ejs',{msg:"Adicionado com Sucesso!!",Autores:docs})
            })
        }
    })
}
function abrirEdita(req,res){
    autor.findById(req.params.id,function(err,autor){
        res.render('autor/edit.ejs',{'autor':autor});
    })
}
function edita(req,res){
    autor.findByIdAndUpdate(req.params.id,{nome:req.body.nome},function(err){
        if(err){
            autor.find({}).lean().exec(function(err,docs){
            res.render('autor/list.ejs',{msg:"Problema ao Editar!",Autores:docs})
            })
        }else{
            autor.find({}).lean().exec(function(err,docs){
            res.render('autor/list.ejs',{msg:"Editado com Sucesso!!",Autores:docs})
            })
        }
    })
}
function deleta(req,res){
    autor.findByIdAndDelete(req.params.id,function(){
        autor.find({}).lean().exec(function(err,docs){
        res.render('autor/list.ejs',{msg:"Removido com Sucesso!!",Autores:docs})
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