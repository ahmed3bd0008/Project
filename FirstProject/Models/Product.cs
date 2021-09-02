
namespace FirstProject.Models
{
    

public class Product:BasicEntity
{
 public string Name { get; set; } 
  public string Describtion { get; set; }
  public decimal   Price { get; set; }
  public int CategoryID { get; set; }
  public Catogry Catogry { get; set; }
}
}