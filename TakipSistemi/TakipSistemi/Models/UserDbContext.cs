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


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //connection string : "Server=(localdb)\mssqllocaldb; Database=ECommerceDb; Trusted_Connection=True;"
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb; Database=VehicleTracking; Trusted_Connection=True;");


        }


        public DbSet<UserData> SingUpData { get; set; }


        public DbSet<TakipSistemi.Models.ModelDtos.UserDataCreate> UserDataCreate { get; set; }
    }
}
