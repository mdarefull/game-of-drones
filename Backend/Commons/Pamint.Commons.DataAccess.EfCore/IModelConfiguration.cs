namespace Microsoft.EntityFrameworkCore
{
    public interface IModelConfiguration<TDbContext> where TDbContext : DbContext
    {
        ModelBuilder Configure(ModelBuilder modelBuilder);
    }
}