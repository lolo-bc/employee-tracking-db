DROP DATABASE IF EXISTS all_employees;
CREATE database all_employees;

USE all_employees;

CREATE TABLE departments (
  id INT NOT NULL,
  department_name VARCHAR(30), 
  PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL(5,5) 
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE employee {
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
}


SELECT department.department_id, roles.department_id 
FROM  departments
INNER JOIN roles ON department.department_id=roles.department_id;

SELECT employee.role_id, roles.id
FROM employee
INNER JOIN employee ON employee.role_id=roles.id;

