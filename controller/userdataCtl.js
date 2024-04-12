const mysql = require('mysql2');
const {getConnection, runQueryValues, registerSyntax, loginSyntax} = require('../config/connection')

const insertUser =() =>{
    const userData ={
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    }
Userdata.create(userData).then(rs=>{
    console.log(rs);
}).catch(err=>{
    console.log(err);
})

}


module.exports = (insertUser)