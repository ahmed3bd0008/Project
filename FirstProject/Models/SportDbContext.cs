using Microsoft.EntityFrameworkCore;
namespace FirstProject.Models   
{
public class SportDbContext:DbContext
{
    public SportDbContext(DbContextOptions options):base(options)
    {
        
    }
    public DbSet<Product> Products { get; set; }
    public DbSet<Catogry> Catogries { get; set; }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Product>().
        HasOne(p=>p.Catogry).
        WithMany(c=>c.Product).
        HasForeignKey(f=>f.CategoryID);


        builder.Entity<Catogry>().
        HasMany(p=>p.Product).
        WithOne(d=>d.Catogry).
        HasForeignKey(f=>f.CategoryID);
    }
}
}