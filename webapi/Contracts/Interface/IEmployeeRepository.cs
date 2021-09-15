using Entity.Model;

namespace Contracts.Interface
{
    public interface IEmployeeRepository:IGenericRepository<Employee>
    {
           public Employee GetEmployee(System.Guid EmployeeId, bool asTracking);
    }
}