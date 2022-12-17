using Microsoft.AspNetCore.Mvc;

namespace TakipSistemi.ViewComponents
{
    public class DrawRouteOnMap:ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
