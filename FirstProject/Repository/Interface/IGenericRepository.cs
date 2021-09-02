using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
namespace FirstProject.Repo.Interface
{
public interface IGenericRepository<T> where T:BasicEntity
{
     public Task<T> Get(int Id) ;   
     public Task<T> Get(Expression<Func<T,bool>>expression) ; 
     public Task<IEnumerable<T>> GetList(Expression<Func<T,bool>>expression) ;  
     public Task<IEnumerable<T>> GetList();
     public Task Add(T Model);
     public void Remove(T Model);
     public Task <int>SaveChange(); 
    
}
}