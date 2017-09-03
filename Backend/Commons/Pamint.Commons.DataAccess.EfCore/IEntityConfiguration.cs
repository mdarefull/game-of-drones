using Pamint.Commons.Domain;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Microsoft.EntityFrameworkCore
{
    public interface IEntityConfiguration<TModel, TKey> where TModel : ModelBase<TKey>
    {
        void Configure(EntityTypeBuilder<TModel> entityBuilder);
    }
}