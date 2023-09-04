USE employees_db;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ('Bob', 'Jones', 1, 1),
        ('Jeff', 'Smith', 2, NULL),
        ('Marge', 'Johnson', 3, 3);

INSERT INTO department (name)
    VALUES
        ('Accounting'),
        ('IT'),
        ('HR');

INSERT INTO role (title, salary, department_id)
    VALUES
        ('Accountant I', 80000, 1),
        ('IT Support Technician', 70000, 2),
        ('HR Associate', 60000, 3);    

INSERT INTO manager (first_name, last_name)
    VALUES
        ('Ted', 'Gatsby'),
        ('Mary', 'Brown'),
        ('Alicia', 'Silverstone');