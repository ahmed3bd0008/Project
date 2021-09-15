using System;
using System.Linq;
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

                        public Employee GetEmployee(Guid EmployeeId, bool asTracking)
                        {
                                 return FindByCondation(d=>d.Id.Equals(EmployeeId),asTracking).SingleOrDefault();
                        }
            }
}