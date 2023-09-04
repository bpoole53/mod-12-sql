const inquirer = require('inquirer');
mysql = require('mysql2')

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Bootcamp1!',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

inquirer
    .prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'Please choose an option',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
        },
    ])
    .then(answers => {
        console.info('Answer:', answers.choices);
    });

db.query('SELECT * FROM employee', function (err, results){
    console.info(results);
});    