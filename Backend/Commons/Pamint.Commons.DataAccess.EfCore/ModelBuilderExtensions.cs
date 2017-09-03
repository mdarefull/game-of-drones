using Pamint.Commons.Domain;

namespace Microsoft.EntityFrameworkCore
{
    public static class ModelBuilderExtensions
    {
        public static ModelBuilder AddConfiguration<TModel, TKey>(this ModelBuilder modelBuiler, IEntityConfiguration<TModel, TKey> entityConfiguration)
            where TModel : ModelBase<TKey>
        {
            entityConfiguration.Configure(modelBuiler.Entity<TModel>());
            return modelBuiler;
        }
    }
}