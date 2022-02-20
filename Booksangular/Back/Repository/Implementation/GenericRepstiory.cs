using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Email;
using Core.Shared;
using Microsoft.EntityFrameworkCore;
using Repository.Context;
using Repository.Interface;

namespace Repository.Implementation
{
    public class GenericRepstiory<T> : IGenericRepstiory<T> where T : Entity
    {
        private readonly TestContext _context;
        private readonly DbSet<T> _entity;

        public GenericRepstiory(TestContext context)
        {
            _context=context;
            _entity=context.Set<T>();
        }

        public void AddEntity(T entity)
        {
            _entity.Add(entity);
        }

        public async Task AddEntityAsync(T entity)
        {
           await _entity.AddAsync(entity);
        }

        public List<T> getEntity(bool track)
        {
            return track?  _entity.AsNoTracking().ToList():_entity.ToList();
        }

        public async Task<List<T>> getEntityAsync(bool track)
        {
            return  track?await _entity.AsNoTracking().ToListAsync():await _entity.ToListAsync();
        }

        public async Task<List<T>> getEntityAsync(Expression<Func<T, bool>> expression, bool track)
        {
             return  track?await _entity.AsNoTracking().Where(expression).ToListAsync():await _entity.Where(expression).ToListAsync();
        }
         public List<T> getEntity(Expression<Func<T, bool>> expression, bool track)
        {
             return  track? _entity.AsNoTracking().Where(expression).ToList():_entity.Where(expression).ToList();
        }
        public async Task<T> getEntityAsyncById(Guid id)
        {
            return await _entity.Where(d=>d.Id==id).FirstOrDefaultAsync();
        }

        public T getEntityById(Guid id)
        {
             return  _entity.Where(d=>d.Id==id).FirstOrDefault();
        }

        public void updateEntity(T entity)
        {
           _entity.Update(entity);
        }
    }
}