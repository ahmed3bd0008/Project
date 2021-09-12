using Entity.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace dokumen.pub_ultimate.Extension
{
    public static class serviceExtension
    {
            public static void ConfigurationSqlServer(this IServiceCollection services,IConfiguration configuration)
             {
                services.AddDbContext<RepoDbContext>(opts => opts.UseSqlServer(configuration.GetConnectionString("sqlConnection"),b=>b.MigrationsAssembly("Entities")));
             }
    }
}