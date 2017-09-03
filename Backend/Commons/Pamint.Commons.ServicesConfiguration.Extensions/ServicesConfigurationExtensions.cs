using Pamint.Commons.Domain;
using Pamint.Commons.DataAccess;
using Microsoft.EntityFrameworkCore;
using Pamint.Commons.DataAccess.EfCore;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ServicesConfigurationExtensions
    {
        public static IServiceCollection RegisterDbContextRepository<TModel, TModelKey, TDbContext>(this IServiceCollection services)
            where TModel : ModelBase<TModelKey>
            where TDbContext : DbContext
            => services.AddTransient<IRepository<TModel, TModelKey>>(sp =>
            {
                var dbContext = sp.GetRequiredService<TDbContext>();
                return new DbContextRepository<TModel, TModelKey>(dbContext);
            });
    }
}