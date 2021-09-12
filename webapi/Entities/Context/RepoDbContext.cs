using Entity.Model;
using Microsoft.EntityFrameworkCore;

namespace Entity.Context
{
    public class RepoDbContext:DbContext
    {
      public RepoDbContext(DbContextOptions options):base(options)
      {
          
      }
      public DbSet<Company>Companies{get;set;}
      public DbSet<Employee>Employees{get;set;}
    }
}