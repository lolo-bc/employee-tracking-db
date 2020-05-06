DROP DATABASE IF EXISTS all_employees;
CREATE database all_employees;

USE all_employees;

CREATE TABLE department (
  id INT NOT NULL,
  employee_name VARCHAR(30), 
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



