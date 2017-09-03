using System;
using GameOfDrones.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GameOfDrones.DataAccess.Configurations.Entities
{
    internal class PlayerConfiguration : IEntityConfiguration<Player, long>
    {
        public void Configure(EntityTypeBuilder<Player> entityBuilder)
        {
            entityBuilder.Property(p => p.Name)
                         .IsRequired();

            entityBuilder.HasIndex(p => p.Name)
                         .IsUnique();

            entityBuilder.Property(p => p.Wins)
                         .IsRequired();
        }
    }
}
