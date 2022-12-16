

using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace TakipSistemi.Models.Entities
{

    public class RoadRoute
    {
        public RoadRoute()
        {
                Coordinates= new List<Coordinate>();
        }

        [Key]
        public int RouteId { get; set; }
        public string RouteName { get; set; }

        public List<Coordinate> Coordinates { get; set; }

    }
}
