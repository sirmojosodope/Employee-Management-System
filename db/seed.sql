USE employees;

INSERT INTO department
    (name)
VALUES
    ("Sales"),
    ("Engineering"),
    ("Legal");

INSERT INTO roles
    (title, salary, department_id)
VALUES
    ("Lawyer", 150000, 3 ),
    ("Sales Lead", 120000, 1),
    ("Software Engineer", 100000, 2);
   

INSERT INTO employee
    (first_name, last_name, role_id)
VALUES
    ("Lamont", "Barnett", 2),
    ("George", "Clooney", 1),
    ("Quest", "Love", 3);