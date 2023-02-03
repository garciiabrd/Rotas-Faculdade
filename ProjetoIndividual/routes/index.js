const express = require("express");
const router = express.Router();

router.get('/', (req,res) => { 
    let obj={
        nome:req.query.nome,
    };
    res.render('home',obj);
});
router.get('/rota3', (req,res) => { 
        let obj={ 
            materia1:[{nome:'Algoritmo e Lógica de Programação', status:'Aprovado',nota:'8.5',frequencia:'100%'}],
            materia2:[{nome:'Modelagem de Banco de Dados', status:'Aprovado',nota:'6.1',frequencia:'95%'}],
            materia3:[{nome:'Engenharia de Software I', status:'Aprovado',nota:'6.9',frequencia:'95%'}],
            materia4:[{nome:'Sistemas Operacionais e Redes de Computadores', status:'Aprovado',nota:'6.6',frequencia:'85%'}],
            materia5:[{nome:'Desenvolvimento Web I', status:'Aprovado',nota:'8.5',frequencia:'75.00%'}],
            materia6:[{nome:'Design Digital', status:'Aprovado',nota:'9.0',frequencia:'92%'}], 
            materia7:[{nome:'Banco de Dados Relacional', status:'Aprovado',nota:'7.7',frequencia:'90%'}],
            materia8:[{nome:'Engenharia de Software II', status:'Aprovado',nota:'6.8',frequencia:'90%'}],
            materia9:[{nome:'Técnica de Programação I ', status:'Aprovado',nota:'8.5',frequencia:'85%'}],
            materia10:[{nome:'Matemática para Computação', status:'Aprovado',nota:'8.0',frequencia:'100%'}], 
        };
    res.render('rota3',obj);
});
router.get('/rota2', (req,res) => { 
    let obj={
        nome:req.query.nome,
    };
    res.render('rota2',obj);
});

module.exports = router;