using GameOfDrones.Presentation.MvcCore.PlayersStatistics.ViewModels;
using GameOfDrones.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace GameOfDrones.Presentation.MvcCore.PlayersStatistics
{
    [Route("api/[controller]")]
    public class PlayersStatisticsController : Controller
    {
        protected IPlayerServices PlayerServices { get; }
        public PlayersStatisticsController(IPlayerServices services)
        {
            PlayerServices = services;
        }

        [HttpGet]
        public IReadOnlyCollection<PlayerInfoViewModel> Get()
        {
            var players = PlayerServices
                          .GetAll();
            return PlayerInfoViewModel
                   .ParseAll(players);
        }

        [HttpPost]
        public ObjectResult RegisterWin([FromQuery] string name)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var player = PlayerServices.RegisterWin(name);
            if (player == null)
            {
                ModelState.AddModelError("", "Couldn't register the win.");
                return BadRequest(ModelState);
            }

            return Ok(player);
        }
    }
}
