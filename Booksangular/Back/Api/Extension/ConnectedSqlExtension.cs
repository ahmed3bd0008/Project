using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Repository.Context;

namespace Api.Extension
{
    public static class ConnectedSqlExtension
    {
        public static void ConnectedSql(this IServiceCollection services,IConfiguration configuration)
        {
            services.AddDbContextPool<TestContext>(d=>d.
            UseSqlServer(configuration.GetConnectionString("apiTestContext"),b=>b.MigrationsAssembly("Api")));   
        }
    }
}