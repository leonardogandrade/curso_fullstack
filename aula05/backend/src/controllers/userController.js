const mongoose = require('mongoose');
const axios = require('axios');
const User = mongoose.model('User');

module.exports = {
    //Persistir no banco usuários do Git
    async persistUser(req,res){
        const {userGit} = req.body;
        const response = await axios.get(`https://api.github.com/users/${userGit}`);
        const {login,name,avatar_url,company,public_repos,followers,bio} = response.data;
        const payload = await User.create({
            login,
            name,
            avatar_url,
            company,
            public_repos,
            followers,
            bio
        })
        res.json(payload);
    },
    async listUsers(req,res){
        const response = await User.find();
        res.json(response);
    },
    async getUserGit(req,res){
        const response = await axios.get('https://api.github.com/users/leonardogandrade');
        res.json(response.data);
    }, 
    //Persistir no banco usuário do Git se criado antes de 2020
    async gitUser2020(req,res){
        const response = await axios.get('https://api.github.com/users/leonardogandrade');
        const {login,created_at} = response.data;
        const created_at_date = new Date(Date.parse(created_at));

        if(created_at_date.getFullYear() < 2020){
            res.json({
                "msg" : "usuário antigo"
            })
        }else{
            res.json({
                "msg" : "usuário muito novo"
            })
        }

    }

    //Novo backend origen:[lat,lon] destino:[lat,lon] => distancia


}