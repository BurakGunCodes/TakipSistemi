using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using TakipSistemi.Models;
using TakipSistemi.Models.Entities;
using TakipSistemi.Models.ModelDtos;
using TakipSistemi.Models.ModelDtos.MapDtos;

namespace TakipSistemi.Controllers
{
    public class MapController : Controller
    {

        SystemDbContext _context = new SystemDbContext();


        public IActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public IActionResult MapCoordinateCreate(List<MapCoordinateCreate> MapCoordinateList, string RouteName)
        {
            if (MapCoordinateList?.Count >0 )
            {
                RoadRoute route = new RoadRoute()
                {
                     RouteName= RouteName,
        
                };

                _context.Routes.Add(route);
                int sonuc = _context.SaveChanges();

                List<Coordinate> list = new List<Coordinate>();
                Coordinate coordinate;

                foreach (var mapcoordinate in MapCoordinateList)
                {
                    coordinate = new Coordinate()
                    {
                        Lat = mapcoordinate.Lat,
                        Lng = mapcoordinate.Lng,
                        RouteId = route.RouteId,
                    };

                    list.Add(coordinate );
                }

                _context.Coordinates.AddRange(list);
                //userDataCreate i User Dataya donuştür;

                 sonuc += _context.SaveChanges();

                //_context.Users.Add(userData);



            }

            return View();
        }


    }
}
