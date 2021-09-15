using System;
using System.Linq;
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

                        public Company GetCompany(Guid COmpanyId, bool asTracking)
                        {
                                return   FindByCondation(d=>d.Id==COmpanyId,asTracking).SingleOrDefault();
                        }
            }
}