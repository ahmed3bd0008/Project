using Entity.Model;

namespace Contracts.Interface
{
    public interface IComponyRepository:IGenericRepository<Company>
    {
        public Company GetCompany(System.Guid COmpanyId,bool asTracking);
     
        
    }
}