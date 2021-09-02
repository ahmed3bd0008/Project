using System.ComponentModel.DataAnnotations;

namespace FirstProject.ViewModel
{
    public class AddProduct
    {
        [Required]
        public string Name { get; set; } 
        public string Describtion { get; set; }
        public decimal   Price { get; set; }
        public int CategoryID { get; set; }
    }
}