using Microsoft.AspNetCore.Mvc;

namespace TakipSistemi.Controllers
{
    public class MapController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
