﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcWebsite.Models
{
    public class Enrollment
    {
        public int EnrollmentId { get; set; }
        public int CourseId { get; set; }
        public int StudentId { get; set; }
        public decimal? Grade { get; set; }
        public Student Student { get; set; }
        public Course Course { get; set; }
    }
}