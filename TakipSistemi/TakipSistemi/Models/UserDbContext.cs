using Microsoft.EntityFrameworkCore;

namespace TakipSistemi.Models
{
    public class UserDbContext : DbContext
    {
        public DbSet<LoginData> Users { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //connection string : "Server=(localdb)\mssqllocaldb; Database=ECommerceDb; Trusted_Connection=True;"
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb; Database=VehicleTracking; Trusted_Connection=True;");
        }
    }
}
