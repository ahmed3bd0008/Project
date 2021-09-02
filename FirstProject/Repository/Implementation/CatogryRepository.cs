using FirstProject.Models;
using FirstProject.Repo.Interface;

namespace  FirstProject.Repo.Implement
{
    public class CatogryRepository:GenericRepository<Catogry>,ICatogryRepository
    {
        public CatogryRepository(SportDbContext context):base(context)
        {
           

        }
    }
}