using Microsoft.EntityFrameworkCore;

namespace Pamint.Commons.DataAccess.EfCore
{
    public abstract class DbContextSeeder<TDbContext> : IDbSeeder where TDbContext : DbContext
    {
        protected virtual TDbContext DbContext { get; }
        public DbContextSeeder(TDbContext dbContext)
        {
            DbContext = dbContext;
        }

        public abstract void SeedDataBase();
    }
}