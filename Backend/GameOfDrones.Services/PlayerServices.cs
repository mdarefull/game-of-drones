﻿using GameOfDrones.Models;
using Pamint.Commons.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GameOfDrones.Services
{
    /// <summary>
    /// Basic implementation of <see cref="IPlayerServices"/>
    /// </summary>
    public class PlayerServices : IPlayerServices
    {
        /// <summary>
        /// Player's repository of the application.
        /// </summary>
        protected virtual IRepository<Player, long> Repository { get; }
        /// <summary>
        /// Creates a new instance of <see cref="PlayerServices"/> with the given resolved dependencies.
        /// </summary>
        /// <param name="repository">An instance of the player's repository of the application.</param>
        public PlayerServices(IRepository<Player, long> repository)
        {
            Repository = repository;
        }

        /// <inheritdoc />
        public virtual Player Add(Player player)
        {
            if (player == null)
                throw new ArgumentNullException(nameof(player));

            player.Wins = 1;
            return Repository.AddAtomic(player);
        }
        /// <inheritdoc />
        public virtual Player Update(Player player)
        {
            if (player == null)
                throw new ArgumentNullException(nameof(player));

            var actualPlayer = Repository.GetById(player.Id);
            if (actualPlayer == null)
                return null;

            actualPlayer.Name = player.Name;
            actualPlayer.Wins = player.Wins;

            return UpdateActual(actualPlayer);
        }
        private Player UpdateActual(Player actualPlayer)
            => Repository.UpdateAtomic(actualPlayer);
        /// <inheritdoc />
        public virtual IReadOnlyCollection<Player> GetAll()
            => Repository
               .GetAll()
               .OrderByDescending(p => p.Wins)
               .ThenBy(p => p.Name)
               .ThenBy(p => p.Id)
               .ToList();
        /// <inheritdoc />
        public virtual Player GetByName(string name)
            => Repository
               .GetAll()
               .FirstOrDefault(p => p.Name.Equals(name, StringComparison.OrdinalIgnoreCase));
        /// <inheritdoc />
        public Player RegisterWin(string playerName)
        {
            if (playerName == null)
                throw new ArgumentNullException(nameof(playerName));

            var actualPlayer = GetByName(playerName);
            if (actualPlayer == null)
            {
                var newPlayer = new Player { Name = playerName };
                return Add(newPlayer);
            }
            else
            {
                actualPlayer.Wins++;
                return UpdateActual(actualPlayer);
            }
        }
    }
}
