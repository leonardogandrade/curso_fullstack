const mongoose =  require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async persistData(req, res){
        const response =  await req.body;
        User.create(response);
        res.json(response);
    },
    async listUsers(req,res){
        const response = await User.find();
        res.json(response);
    },
    //Pesquisa com campo vindo da URL
    async listaUm(req,res){
        const response = await User.findById(req.params.id);
        res.json(response);
    },
    //Pesquisa todos do sexo F
    async listBySex(req,res){
        const response = await User.find({"sex" : req.params.sex});
        res.json(response);
    },
    //Todos que tem menos que X anos
    async listByAge(req,res){
        const response = await User.find({"age" : {$gt : req.params.age}});
        res.json(response);
    },
    listManyFields(req,res){
        const response =  req.query.f;
        res.json(response);
    }
}