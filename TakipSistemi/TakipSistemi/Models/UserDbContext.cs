using Microsoft.EntityFrameworkCore;
using TakipSistemi.Models;

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


        public DbSet<TakipSistemi.Models.UserData> SingUpData { get; set; }
    }
}
