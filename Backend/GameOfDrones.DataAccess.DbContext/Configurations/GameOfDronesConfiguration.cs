using GameOfDrones.DataAccess.Configurations.Entities;
using Microsoft.EntityFrameworkCore;

namespace GameOfDrones.DataAccess.Configurations
{
    internal class GameOfDronesConfiguration : IModelConfiguration<GameOfDronesDbContext>
    {
        public ModelBuilder Configure(ModelBuilder modelBuilder)
            => modelBuilder.AddConfiguration(new PlayerConfiguration());
    }
}
