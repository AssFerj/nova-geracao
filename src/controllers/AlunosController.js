const AlunosModel = require('../models/AlunosModel');

const AlunosController = {
    index: (req, res)=>{
        const aluno = AlunosModel.index();
            res.render('alunos', {title: 'Alunos | Nova Geração', aluno})
    },
    cadastrar: (req, res)=>{
        AlunosModel.cadastrar(req.body);
        return res.redirect('/alunos');
        
    },
    editar: (req, res)=>{
        AlunosModel.editar(req.body);
    }
}
module.exports = AlunosController;