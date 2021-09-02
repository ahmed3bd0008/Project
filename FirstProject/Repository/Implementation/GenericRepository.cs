using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FirstProject.Repo.Interface;
using FirstProject.Models;
namespace FirstProject.Repo.Implement
{
public class GenericRepository<T> : IGenericRepository<T> where T:BasicEntity
{
            private readonly SportDbContext _context;

            protected DbSet<T> _Entity { get; }

            public GenericRepository(SportDbContext context)
            {
                _context=context;
                _Entity=_context.Set<T>();
            }
            public async Task Add(T Model)
            {
                    await _Entity.AddAsync(Model);
            }

            public async Task<T> Get(int Id)
            {
                 return await  _Entity.AsQueryable<T>().FirstAsync(Entry=>Entry.Id==Id);
            }

            public async Task<T> Get(Expression<Func<T, bool>> expression)
            {
                        return await _Entity.FindAsync(expression);
            }

            public async Task<IEnumerable<T>> GetList()
            {
                     return  await _Entity.ToListAsync<T>();
            }

            public  void Remove(T Model)
            {
                     _Entity.Remove(Model);
            }

            public async Task<IEnumerable<T>> GetList(Expression<Func<T, bool>> expression)
            {
                        return await _Entity.Where<T>(expression).ToListAsync();
            }
             public async Task<int> SaveChange()
                 {
                    return await _context.SaveChangesAsync(); 
                 }
            }
}