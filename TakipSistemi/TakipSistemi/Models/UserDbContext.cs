using Microsoft.EntityFrameworkCore;
using System.Configuration.Provider;
using TakipSistemi.Models.Entities;
using static System.Net.Mime.MediaTypeNames;
using TakipSistemi.Models.ModelDtos;

namespace TakipSistemi.Models
{
    public class UserDbContext : DbContext
    {
        public DbSet<UserData> Users { get; set; }
        public DbSet<RoadRoute> Routes { get; set; }
        public DbSet<Coordinate> Coordinates { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //connection string : "Server=(localdb)\mssqllocaldb; Database=ECommerceDb; Trusted_Connection=True;"
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb; Database=VehicleTracking; Trusted_Connection=True;");


        }

    }
}
