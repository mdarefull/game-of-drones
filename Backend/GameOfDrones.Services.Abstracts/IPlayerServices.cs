using GameOfDrones.Models;
using System.Collections.Generic;

namespace GameOfDrones.Services
{
    public interface IPlayerServices
    {
        /// <summary>
        /// Register a new win for the given player. 
        /// If such player doesn't exist it will be created with 1 win.
        /// If such player does exist, its win record will be incremented in 1.
        /// </summary>
        /// <param name="playerName">The player to which a win will be registered.</param>
        Player RegisterWin(string playerName);

        /// <summary>
        /// Returns all the registered players of the application.
        /// </summary>
        /// <returns>Read only collection of all the players of the application.</returns>
        IReadOnlyCollection<Player> GetAll();

        /// <summary>
        /// Gets a registered player by its id, null if none could be found.
        /// </summary>
        /// <returns>A registered player with the given id.</returns>
        Player GetByName(string name);

        /// <summary>
        /// Register a new player.
        /// </summary>
        /// <param name="player">The player to register.</param>
        /// <returns>The registered player.</returns>
        Player Add(Player player);
        /// <summary>
        /// Updates an existing player.
        /// </summary>
        /// <param name="player">The player to update.</param>
        /// <returns>The updated player.</returns>
        Player Update(Player player);
    }
}
