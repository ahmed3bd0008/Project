using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Email;

namespace Repository.Interface
{
    public interface IGenericRepstiory<T>
    {
         Task AddEntityAsync(T message);
         void AddEntity(T entity);
         void updateEntity(T entity);
         List<T> getEntity (bool track);
        Task< List<T>> getEntityAsync (bool track);
        Task< List<T>> getEntityAsync (Expression<Func<T,bool>> expression,bool track);
        List<T> getEntity (Expression<Func<T,bool>> expression,bool track);
        T getEntityById(Guid id);
       Task< T> getEntityAsyncById(Guid id);
    }
}