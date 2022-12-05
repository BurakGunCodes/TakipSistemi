using Microsoft.AspNetCore.Mvc;
using TakipSistemi.Models;

namespace TakipSistemi.Controllers
{
    public class LoginController : Controller
    {
        UserDbContext _context = new UserDbContext();

        public IActionResult Login()
        {
            return View();
        }



        [HttpPost]
        public IActionResult Login(LoginData login)
        {

            if (ModelState.IsValid)
            {
                // Check If user is created before
                // Return value(if data is exist) or null(if data is not available)
                var queryResult = _context.Users.FirstOrDefault(input => input.EmailAddr == login.EmailAddr);

                //
                if (queryResult != null)
                {
                    TempData["message"] = "There is an account associated with this e-mail address. Control your e-mail address or try to login!";
                    return View();
                }
                _context.Users.Add(login);
                _context.SaveChanges();
            }
            return View();
        }
    }
}
