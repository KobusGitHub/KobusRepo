using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MvcWebsite.Models
{
    public class SchoolInitializer: DropCreateDatabaseIfModelChanges<SchoolContext>
    {
        protected override void Seed(SchoolContext context)
        {
            var students = new List<Student>
                           {
                               new Student{FirstName = "James", LastName = "Dean", EnrollmentDate = DateTime.Parse("2012-01-01")},
                               new Student{FirstName = "Lynda", LastName = "Thames", EnrollmentDate = DateTime.Parse("2013-01-01")},
                               
                           };

            foreach(var student in students)
            {
                context.Students.Add(student);
            }
            context.SaveChanges();

            var courses = new List<Course>
                          {
                              new Course { CourseName = "Java", TotalCredits = 4 },
                              new Course { CourseName = "C#", TotalCredits = 4 }
                          };


            foreach(var course in courses)
            {
                context.Courses.Add(course);
            }
            context.SaveChanges();

            var enrollments = new List<Enrollment>
                              {
                                  new Enrollment { CourseId = 1, StudentId = 1, Grade = 3 },
                                  new Enrollment { CourseId = 1, StudentId = 2, Grade = 4 }
                              };


            foreach(var enrollment in enrollments)
            {
                context.Enrollments.Add(enrollment);
            }

            context.SaveChanges();
        }
    }
}