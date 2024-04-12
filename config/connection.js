const mysql = require('mysql2')
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "btu0ronjqnza7nkvzllj-mysql.services.clever-cloud.com",
    user:  "udts7gurhddyqcj0",
    database: "btu0ronjqnza7nkvzllj",
    password:  "u3xcySxCQ1hzJhFwKivM",
});
function getConnection() {
    return new Promise((resolve, reject)=> {
        pool.getConnection((err, connection)=>{
            if(err) {
                reject(err);
            } else{
                resolve(connection);
            }
        });
    });
}
function runQueryValues(conn, sqlQuery, values) {
    return new Promise((resolve, reject) => {
     conn.query(sqlQuery, values, (err, result) =>{
        if(err) {
            reject(err);
        } else{
            resolve(result);
        }
     });
    });
}
const sql = "insert into drug_data"
const registerSyntax = "insert into userdata(userid,fullname,usernmae,email,password,role)values(?,?,?,?,?,?)";
const loginSyntax = "select * from userdata where username = ?"

module.exports = {getConnection, runQueryValues, sql, registerSyntax, loginSyntax};