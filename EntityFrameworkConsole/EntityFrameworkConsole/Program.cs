using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityFrameworkConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            EmployeeContext context = new EmployeeContext();

            // Reading
            List<Employee> employeeList = context.Employees.ToList();
            foreach (Employee emp in employeeList)
            {
                Console.WriteLine(emp.FirstName + " " + emp.LastName);
            }



            // Find HR department
            Console.WriteLine("");
            Console.WriteLine("Find HR department");
            Console.ReadKey();
            Department hrDep = context.Departments.FirstOrDefault(x => x.Name == "HR");
            Console.WriteLine(hrDep.Name + " - " + hrDep.Location);


            // Inserting
            Console.WriteLine("");
            Console.WriteLine("Anykey to Insert");
            Console.ReadKey();

            Employee newEmp = new Employee()
            {
                FirstName = "Kobus",
                LastName = "Jonker",
                //DepartmentId = 1,
                Department = hrDep,
                Gender = "Male",
                Salary = 60000

            };
            context.Employees.Add(newEmp);
            context.SaveChanges();

            // Updating
            Console.WriteLine("");
            Console.WriteLine("Anykey to Update");
            Console.ReadKey();

            employeeList = context.Employees.ToList();
            Employee updEmp = employeeList.FirstOrDefault(x => x.FirstName == "Kobus");
            if(updEmp != null)
            {
                updEmp.Salary = 65000;
                context.SaveChanges();
            }
            


            // Deleting
            Console.WriteLine("");
            Console.WriteLine("Anykey to Delete");
            Console.ReadKey();

            employeeList = context.Employees.ToList();
            Employee delEmp = employeeList.FirstOrDefault(x => x.FirstName == "Kobus");
            if (delEmp != null)
            {
                context.Employees.Remove(delEmp);
                context.SaveChanges();
            }
            
        }
    }
}
