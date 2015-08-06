using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using AngularWithMvcProject_API.Models;

namespace AngularWithMvcProject_API.Controllers
{
    public class ProductController : Controller
    {
       public ActionResult Index()
        {
            
            return View();
        }
        
    }
}
