using Core.Email;
using Microsoft.EntityFrameworkCore;
using Repository.Configuration;

namespace Repository.Context
{
    public class TestContext:DbContext
    {
        public TestContext(DbContextOptions options):base(options)
        {
            
        }
        public DbSet<Email> emails { get; set; }
        public DbSet<Message> messages { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder){
              modelBuilder.ApplyConfiguration(  new configureSendEmail());
        }
    }
 
}