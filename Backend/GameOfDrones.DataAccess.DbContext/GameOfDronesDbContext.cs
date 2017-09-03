using GameOfDrones.DataAccess.Configurations;
using GameOfDrones.Models;
using Microsoft.EntityFrameworkCore;

namespace GameOfDrones.DataAccess
{
    /// <summary>
    /// Represents our application's Db model.
    /// </summary>
    public class GameOfDronesDbContext : DbContext
    {
        public GameOfDronesDbContext(DbContextOptions<GameOfDronesDbContext> options) : base(options) { }
        /// <inheritdoc />
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            new GameOfDronesConfiguration().Configure(modelBuilder);
        }

        public virtual DbSet<Player> MyProperty { get; set; }
    }
}
