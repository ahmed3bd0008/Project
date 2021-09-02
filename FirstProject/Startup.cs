using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using FirstProject.Repo.Implement;
using FirstProject.Repo.Interface;
using FirstProject.Models;
using FirstProject.Models.SeedDate;
namespace FirstProject
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddDbContext<SportDbContext>
            (
                opt=>
                {
                    opt.UseSqlServer(Configuration["ConnectionStrings:SportsStoreConnection"]);
                }
            );
                 services.AddScoped(typeof(IGenericRepository<>),typeof(GenericRepository<>));
                 services.AddScoped(typeof(IProductrepository),typeof(Productrepository));
                 services.AddScoped(typeof(ICatogryRepository),typeof(CatogryRepository));
                 services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
            app.UseStatusCodePages();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
            SeedDate.EnsurePopulatedCatorge(app);
            SeedDate.EnsurePopulated(app);
        }
    }
}
