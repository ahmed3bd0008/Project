using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Repository.Context;
using Repository.Implementation;
using Repository.Interface;
using Service.Implementation;
using Service.Interface;

namespace Api.Extension
{
    public static class ConfigurationService
    {
        public static void configurationRepository(this IServiceCollection services)
        {
            
            services.AddScoped(typeof(IGenericRepstiory<>),typeof(GenericRepstiory<>));
            services.AddScoped(typeof(IUntityOfWork),typeof(UntityOfWork));
        }
         public static void configurationService(this IServiceCollection services)
        {
             services.AddScoped(typeof(IMessageService),typeof(MessageService));
        }
    }
}