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
    public class ProductApiController : ApiController
    {
         public static List<Product> products = new List<Product>();
        public static int pageLoadFlag = 1;

        public ProductApiController()
        {
            if (pageLoadFlag == 1)
            {
                products.Add(new Product { Id = 1, Name = "Product1", Category = "Cat1", Price = 100 });
                products.Add(new Product { Id = 2, Name = "Product2", Category = "Cat2", Price = 200 });
                products.Add(new Product { Id = 3, Name = "Product3", Category = "Cat3", Price = 300 });
                products.Add(new Product { Id = 4, Name = "Product4", Category = "Cat4", Price = 400 });
                pageLoadFlag++;
            }
        }


        // GET api/product
        public List<Product> GetAllProducts()
        {
            return products;

        }


        //// GET api/product
        //public List<Product> GetAllProducts1()
        //{
        //    return products.Where(x => x.Id == 2).ToList();

        //}



        // GET api/product/3
        public Product GetProduct(int id)
        {
            return products.FirstOrDefault(x => x.Id == id);
        }


        // POST api/product
        public void ProductAdd(Product product)
        {
            products.Add(product);
        }
    }
}
