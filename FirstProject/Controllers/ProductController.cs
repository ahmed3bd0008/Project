using Microsoft.AspNetCore.Mvc;
using FirstProject.ViewModel;
using FirstProject.Models;
using FirstProject.Repo.Interface;
using System;
using System.Threading.Tasks;
using System.Linq;
using AutoMapper;
using FirstProject.Models.SeedDate;
using Microsoft.AspNetCore.Builder;

namespace FirstProject.Controllers
{
    public class ProductController:Controller
    {
         private readonly ICatogryRepository _catogryRepository;
                        private readonly IProductrepository _productrepository;
                        private readonly IMapper _mapper;
                     public ProductController(ICatogryRepository catogryRepository ,
                                  IProductrepository productrepository,
                                  IMapper mapper
                                 )
            {
                _catogryRepository=catogryRepository;  
                _productrepository=productrepository ;
                _mapper=mapper;
               
            }
       [HttpGet]
        public async Task< IActionResult> AddProduct()
        {
           
            ViewData["Catogories"]=await _catogryRepository.GetList();
            ViewBag.Catogories=await _catogryRepository.GetList();
           var x= await _catogryRepository.GetList();
           Console.WriteLine(x.Select(d=>d.Name));
             return View();
                 
        }
        [HttpPost]
        public async Task< IActionResult> AddProduct(AddProduct AddProduct)
        {
                    if (ModelState.IsValid)
                    {
                        var product=_mapper.Map<Product>(AddProduct);
                        await  _productrepository.Add(product);
                        await _catogryRepository.SaveChange();  
                    }
            ViewBag.Catogories=await _catogryRepository.GetList();
                    return View();
        }
    }
}