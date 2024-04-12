/*const Sequelize = require('sequelize');
const {sequelize} = require('../config/connection')

const Userdata = sequelize.define("userdata",{
    userid:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull: false,
        primaryKey:true
    },
    Fullname:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Username:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    Password:{
        type:Sequelize.TEXT,
        allowNull:false
    }
})

Userdata.sync().then((rs)=>{
    console.log(rs)
}).catch((err)=>{
    console.log(err)
})


module.exports =(Userdata)