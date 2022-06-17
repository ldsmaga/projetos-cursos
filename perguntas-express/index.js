const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');
//Database
connection.authenticate().then(()=>{
    console.log("entrou")
})
.catch((e)=>{
    console.log(e)
})
//Definindo EJS como view engine
app.set('view engine', 'ejs');

//Definindo qual pasta irá armazenar os estáticos
app.use(express.static('public'))

//Body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas
app.get("/", (req, res)=>{
    Pergunta.findAll({raw: true, order:[
        ['id','DESC']
    ]}).then(perguntas =>{
        res.render("home",{
            perguntas: perguntas
        })
    });
})

app.get("/perguntar", (req, res)=>{
    res.render("perguntar")
})

app.post("/salvar-pergunta", (req, res)=>{
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    Pergunta.create({
        title: titulo,
        description: descricao
    })
    .then(()=>{
        res.redirect("/");
    })
})

app.get("/pergunta/:id", (req, res)=>{
    let id = req.params.id;
    Pergunta.findOne({
        where:{id: id}
    }).then(pergunta=>{
        if(!pergunta){
            res.render("erro")
        }
        else{
            Resposta.findAll({
                where:{perguntaId:pergunta.id},
                order:[
                    ['id','DESC']
                ]
            })
            .then((respostas)=>{
                res.render("pergunta", {
                    pergunta: pergunta,
                    respostas: respostas
                })
            })
    }
    })  
})

app.post("/responder", (req,res)=>{
    let corpo = req.body.corpo;
    let perguntaId = req.body.pergunta;
    Resposta.create({
        corpo:corpo,
        perguntaId:perguntaId
    })
    .then(()=>{
        res.redirect("/pergunta/" + perguntaId);
    })
    .catch((e)=>{
        console.log("Houve um erro:" + e)
    })
})

app.listen(8080,()=>{
    console.log("App rodando")
})