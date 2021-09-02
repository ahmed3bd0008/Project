using System.Collections.Generic;

namespace FirstProject.Models
{
    public class Catogry:BasicEntity
    {
        public string Name { get; set; }
        public List<Product>Product{get;set;}
    }
}