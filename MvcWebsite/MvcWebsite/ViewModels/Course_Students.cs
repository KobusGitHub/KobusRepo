using System.Collections.Generic;
using MvcWebsite.Models;

namespace MvcWebsite.ViewModels
{
    public class Course_Students
    {
        public Course Course { get; set; }
        public List<Student> Students { get; set; }
    }
}