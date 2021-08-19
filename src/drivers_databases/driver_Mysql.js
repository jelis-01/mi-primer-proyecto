const mysql = require ('mysql');
const connection = mysql.createConnection ({
    host:'localhost',
    user:'root@localhost',
    password:'',
    databases:'proyecto'
});

connection.connect((err)=> {
    if(err)throw err
    console.log('Me conecté de manera exitosa a MySQL');;
});

module.exports = mysql;