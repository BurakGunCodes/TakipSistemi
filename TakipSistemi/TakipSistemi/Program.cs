using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using TakipSistemi.Models;

var builder = WebApplication.CreateBuilder(args);
//var connectionString = builder.Configuration.GetConnectionString("TakipSistemiContextConnection") ?? throw new InvalidOperationException("Connection string 'TakipSistemiContextConnection' not found.");

builder.Services.AddDbContext<AppDbContext>(options =>
        options.UseSqlServer(
            builder.Configuration.GetConnectionString("DefaultConnection")));

//builder.Services.AddDefaultIdentity<IdentityUser>
//    (options =>
//    {
//        options.SignIn.RequireConfirmedAccount = false;
//        options.Password.RequireDigit = false;
//        options.Password.RequiredLength = 3;
//        options.Password.RequireNonAlphanumeric = false;
//        options.Password.RequireUppercase = false;
//        options.Password.RequireLowercase = false;
//    })
//.AddEntityFrameworkStores<AppDbContext>();

builder.Services.AddIdentity<AppUser, AppRole>
    (options =>
    {
        options.SignIn.RequireConfirmedAccount = false;
        options.Password.RequireDigit = false;
        options.Password.RequiredLength = 3;
        options.Password.RequireNonAlphanumeric = false;
        options.Password.RequireUppercase = false;
        options.Password.RequireLowercase = false;
    })
    .AddDefaultTokenProviders()
    .AddDefaultUI()
    .AddEntityFrameworkStores<AppDbContext>();



// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie(options =>
{
    //options.Cookie.Name = "NetCoreMvc.Auth";
    //options.LoginPath = "/Identity/Account/Login";
    //options.AccessDeniedPath= "/Identity/Account/Login";
});



var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseAuthentication();;

app.UseAuthorization();

app.MapRazorPages();



app.MapControllerRoute(
    name: "default",
    pattern: "{controller=User}/{action=CreateRole}/{id?}");

app.Run();
