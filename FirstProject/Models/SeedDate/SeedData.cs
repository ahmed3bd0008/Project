using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using FirstProject.Models;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;

namespace FirstProject.Models.SeedDate
{
    public static class  SeedDate
    {
        public static void EnsurePopulated(IApplicationBuilder applicationBuilder)
        {
                    //GET Instance Of Proovider
               var context  =applicationBuilder.
                       ApplicationServices.CreateScope().
                       ServiceProvider.GetRequiredService<SportDbContext>(); 
                //Migration Make migration iF THIER IS nOT Migration
            if(!context.Database.GetAppliedMigrations().Any())
                        context.Database.Migrate();
            if(!context.Products.Any())
            {
             
               context.Products.AddRange(
               
                  new Product()
                  {
                      Name="Realame 3 pro" ,
                      Describtion="Betaufile mobile",
                      Catogry=new Catogry(){Name="Phon"},
                      CategoryID=1,
                      Price=2500.3M    
                  },
                   new Product()
                  {
                      Name="Oppo 6 pro" ,
                      Describtion="Betaufile mobile",
                      Catogry=new Catogry(){Name="Phone"},
                      CategoryID=1,
                      Price=5500.3M    
                  },
                    new Product()
                  {
                      Name="deal " ,
                      Describtion="Betaufile mobile",
                      Catogry=new Catogry(){Name="Computer"},
                      CategoryID=2,
                      Price=5500.3M    
                  }
                 )  ; 
                 context.SaveChanges();      
            }
        }
         public static void EnsurePopulatedCatorge(IApplicationBuilder applicationBuilder)
         {
                      var context  =applicationBuilder.
                       ApplicationServices.CreateScope().
                       ServiceProvider.GetRequiredService<SportDbContext>(); 
                //Migration Make migration iF THIER IS nOT Migration
            if(!context.Database.GetAppliedMigrations().Any())
                        context.Database.Migrate();
            if(!context.Catogries.Any())
            {
                  context.Catogries.AddRange(
                              new Catogry(){Name="mobile"},
                              new Catogry(){Name="Comuter"}
                  );
                   context.SaveChanges();        
            }
         }
    }
}