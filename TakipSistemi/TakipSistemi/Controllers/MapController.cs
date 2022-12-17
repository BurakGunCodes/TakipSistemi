

using Microsoft.AspNetCore.Mvc;
using TakipSistemi.Models;
using TakipSistemi.Models.Entities;
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

        public IActionResult GetCoordinates()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GetCoordinates(int y)
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetCoordinate(int y)
        {
            var coor = _context.Coordinates.Where(x => x.RouteId == y).ToList();

            List<Coordinate> coordinates = new List<Coordinate>();  

            Coordinate coordinate= new Coordinate();

            foreach (var item in coor)
            {
                coordinate.Lat = item.Lat;
                coordinate.Lng = item.Lng;

                coordinates.Add(coordinate);
            }

            return Json(coordinates);
        }
        

        public IActionResult List()
        {
            var result = _context.Routes.Where(x => x.RouteId > 0).ToList();
            return View(result);
        }

        public IActionResult Details(int id)
        {
            //route id
            var result = _context.Coordinates.Where(x => x.RouteId == id).ToList();
            return View(result);
        }

        [HttpPost]
        public IActionResult MapCoordinateCreate(List<MapCoordinateCreate> MapCoordinateList, string RouteName)
        {
            if (MapCoordinateList?.Count > 0)
            {
                RoadRoute route = new RoadRoute()
                {
                    RouteName = RouteName,

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

                    list.Add(coordinate);
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

