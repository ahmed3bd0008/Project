using FirstProject.Repo.Interface;
using FirstProject.Models;

namespace FirstProject.Repo.Implement
{
public class Productrepository:GenericRepository<Product>, IProductrepository
{
    public Productrepository(SportDbContext context):base(context)
    {
        
    }
}
}