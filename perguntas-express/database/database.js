const  Sequelize  = require('sequelize');

const connection = new Sequelize('perguntas-express', 'root', '',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;