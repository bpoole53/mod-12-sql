const mysql2 = require("mysql2");

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root'
        password: '',
        database: ''
    },      
    console.log('Connected to the db')
)

module.exports = db