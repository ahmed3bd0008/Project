using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FirstProject.Models;

namespace FirstProject.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
          int xx=10;
      
            return View();
        }
        #region Nullabel 
          public IActionResult FakeIndex()
            {
                return View(FakeProduct.GetFakeProducts().ToList());
            }
        #endregion
        #region Dectionary
            public IActionResult FakeIndexDictionary()
            {
                var ProductDic=new Dictionary<string,FakeProduct>();
                foreach (var item in FakeProduct.GetFakeProducts())
                {
                    //intersting
                    if (item?.Name!=null)
                    {
                        
                    ProductDic.Add(item.Name,item);
                    }
                }
                return View(ProductDic);
            }
        #endregion
      #region  nameof
      public IActionResult FactIndexWithoutNameOf()
      {
          var products = new[] 
          { 
              new { Name = "Kayak", Price = 275M },
               new { Name = "Lifejacket", Price = 48.95M },
                new { Name = "Soccer ball", Price = 19.50M },
                 new { Name = "Corner flag", Price = 34.95M }
         };
           return View(products.Select(p => $"Name: {p.Name}, Price: {p.Price}"));
          
      }
       public IActionResult FactIndexNameOf()
      {
            var products = new[] 
            {
            new { Name = "Kayak", Price = 275M },
             new { Name = "Lifejacket", Price = 48.95M },
              new { Name = "Soccer ball", Price = 19.50M },
               new { Name = "Corner flag", Price = 34.95M }
            };
             return View(products.Select(p => $"Name: {p.Name}, Price: {p.Price}"));

      }
      #endregion

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult ViewT()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
     
}
