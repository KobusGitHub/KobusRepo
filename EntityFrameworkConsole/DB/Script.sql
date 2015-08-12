CREATE TABLE Departments
(
 Id int Primary key identity,
 Name nvarchar(50),
 Location nvarchar(50)
)

Create TABLE Employees
(
	Id int primary key identity,
	FirstName nvarchar(50),
	LastName nvarchar(50),
	Gender nvarchar(50),
	Salary int,
	DepartmentId int foreign key references Departments(id)
)

INSERT INTO Departments values ('IT', 'New York')
INSERT INTO Departments values ('HR', 'London')
INSERT INTO Departments values ('Payroll', 'Sydney')


INSERT INTO Employees values ('Mark', 'Hastings', 'Male', 60000, 1)
INSERT INTO Employees values ('Steve', 'Pund', 'Male', 45000, 3)
INSERT INTO Employees values ('Ben', 'Hosking', 'Male', 70000, 1)
INSERT INTO Employees values ('Philip', 'Hasings', 'Male', 45000, 2)
INSERT INTO Employees values ('Mary', 'Lamberh', 'Female', 30000, 2)
INSERT INTO Employees values ('Valary', 'Vikings', 'Female', 35000, 3)
INSERT INTO Employees values ('John', 'Stanmore', 'Male', 80000, 1)
