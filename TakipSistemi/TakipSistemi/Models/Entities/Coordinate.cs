using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TakipSistemi.Models.Entities
{
    public class Coordinate
    {
        [Key]
        public int CoordinateId { get; set; }

        [Required]
        public int RouteId { get; set; }

        [Required]

        public string Lng { get; set; }

        [Required]

        public string Lat { get; set; }

        [ForeignKey(nameof(RouteId))]
        public RoadRoute Route{ get; set; }

    }
}
