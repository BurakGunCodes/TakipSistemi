using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;
using System.Drawing;
using TakipSistemi.Models;

namespace TakipSistemi.Controllers
{
    public class UserController : Controller
    {
        private readonly RoleManager<AppRole> _roleManager;
        private readonly UserManager<AppUser> _userManager;

        public UserController(RoleManager<AppRole> roleManager, 
            UserManager<AppUser> userManager)
        {

            _roleManager = roleManager;
            _userManager = userManager;
        }


        public IActionResult Index()
        {

            return View();
        }

        // Sistem ilk calistirildinda User ve Admin adında iki rol tanımla
        public async Task<IActionResult> CreateRoleAsync()
        {

            int id1 = 1;
            int id2 = 2;

            AppRole role1 = await _roleManager.FindByIdAsync(id1.ToString());
            AppRole role2 = await _roleManager.FindByIdAsync(id2.ToString());

            if(role1 == null)
            {
                IdentityResult roleResult1 = await _roleManager.CreateAsync(new AppRole { Id = "1", Name = "Admin" });
            }

            if (role2 == null)
            {
                IdentityResult roleResult2 = await _roleManager.CreateAsync(new AppRole { Id = "2", Name = "User" });
            }


            return RedirectToAction("List","Map");
        }

        public IActionResult List()
        {
            
            var users = _userManager.Users;
           // var roles = _roleManager.GetRoleNameAsync 

            return View(users);
        }



    }   
}
