using Contracts.Interface;
using Entity.Context;
using Entity.Model;

namespace Repository.Implementation
{
    public class CompanyRepository:GenericRepository<Company>,IComponyRepository
    {
                public CompanyRepository(RepoDbContext Context):base(Context)
                {
                    
                }
    }
}