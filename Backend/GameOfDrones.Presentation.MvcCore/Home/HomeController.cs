using Microsoft.AspNetCore.Mvc;

namespace GameOfDrones.Presentation.MvcCore.Home
{
    public class HomeController: Controller
    {
        public IActionResult Index()
            => View();
    }
}
