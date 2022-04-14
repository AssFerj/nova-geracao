const {uuid}=require('uuidv4')

module.exports={
    aluno: [
        {
            id: 1,
            nome: 'Assis Júnior',
            idade: 34,
            telefone: '88997856905'
        },
        {
            id: 2,
            nome: 'Luis Carlos',
            idade: 29,
            telefone: '88997569852'
        },
        {
            id: 3,
            nome: 'Taylor Swift',
            idade: 33,
            telefone: '88991254545'
        },
        {
            id: 4,
            nome: 'Ana Carolina',
            idade: 34,
            telefone: '88991256548'
        },
        {
            id: 5,
            nome: 'Adriana Calcanhoto',
            idade: 39,
            telefone: '88993584659'
        },
        {
            id: 6,
            nome: 'Lucas Lima',
            idade: 34,
            telefone: '88999562312'
        },
        {
            id: 7,
            nome: 'Edward Maia',
            idade: 30,
            telefone: '88999856421'
        },
        {
            id: 8,
            nome: 'Justin Beaber',
            idade: 28,
            telefone: '88991256342'
        },
        {
            id: 9,
            nome: 'Rodrigo Minotauro',
            idade: 42,
            telefone: '88992354262'
        },
        {
            id: 10,
            nome: 'Aderson Silva',
            idade: 34,
            telefone: '88997856905'
        },
        {
            id: 11,
            nome: 'Fernanda Porto',
            idade: 36,
            telefone: '88993178965'
        },
        {
            id: 12,
            nome: 'Marina Elali',
            idade: 34,
            telefone: '88991458975'
        }
    ],
    index(){
        return this.aluno
    },
    cadastrar({nome, idade, telefone}){
        if(!nome || idade || telefone) return

        this.aluno.push({id: uuid(), nome, idade, telefone});
    }
}