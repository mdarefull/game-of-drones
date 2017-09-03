using GameOfDrones.Models;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace GameOfDrones.Presentation.MvcCore.PlayersStatistics.ViewModels
{
    public class PlayerInfoViewModel
    {
        [Required]
        public long Id { get; set; }
        [Required]
        public string Name { get; set; }
        [BindNever]
        public int Wins { get; set; }

        public Player ToPlayer()
            => new Player
            {
                Id = Id,
                Name = Name,
            };

        public static PlayerInfoViewModel Parse(Player player)
            => new PlayerInfoViewModel
            {
                Id = player.Id,
                Name = player.Name,
                Wins = player.Wins,
            };
        public static IReadOnlyCollection<PlayerInfoViewModel> ParseAll(IEnumerable<Player> players)
            => ParseAllEnum(players)
               .ToList();
        private static IEnumerable<PlayerInfoViewModel> ParseAllEnum(IEnumerable<Player> players)
        {
            foreach (var player in players)
                yield return Parse(player);
        }
    }
}
