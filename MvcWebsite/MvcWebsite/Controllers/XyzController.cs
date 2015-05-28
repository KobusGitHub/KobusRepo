using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcWebsite.Models;
using MvcWebsite.ViewModels;

namespace MvcWebsite.Controllers
{
    public class XyzController : Controller
    {
        private SchoolContext db = new SchoolContext();


        //
        // GET: /Xyz/

        public ActionResult Abc()
        {
            var students = db.Students.ToList();
            return View(students); 

            //Course math = new Course()
            //              {
            //                  CourseName = "Math 101",
            //                  TotalCredits = 4
            //              };

            //Student alex = new Student();
            //alex.FirstName = "Alex";
            //alex.LastName = "Rod";

            //Student lynda = new Student();
            //lynda.FirstName = "Lynda";
            //lynda.LastName = "Rod";

            //Student john = new Student();
            //john.FirstName = "John";
            //john.LastName = "Rod";

            //List<Student> students = new List<Student> { alex, lynda, john };

            //Course_Students obj = new Course_Students()
            //                      {
            //                          Course = math,
            //                          Students = students
            //                      };



            //return View(obj);
        }

        public ActionResult Index()
        {
            return View();
        }

    }
}
