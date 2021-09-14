using Contracts.Interface;
using Entity.Context;
using Entity.Model;

namespace Repository.Implementation
{
    public class EmployeeRepository:GenericRepository<Employee>,IEmployeeRepository
    {
                public EmployeeRepository(RepoDbContext Context):base(Context)
                {
                    
                }
    }
}