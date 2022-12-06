using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Plugins;
using TakipSistemi.Models;

namespace TakipSistemi.Controllers
{
    public class LoginController : Controller
    {
        UserDbContext _context = new UserDbContext();


        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Register(UserData userData)
        {
            // zaten kayıtlı mı diye kontrol et
            //eğer kayıt yoksa kullanıcıyı kayıt et

            if(ModelState.IsValid)
            {
                var queryResult = _context.Users.FirstOrDefault(input => input.EmailAddr == userData.EmailAddr);

                if (queryResult == null)
                {
                    _context.Users.Add(userData);
                    _context.SaveChanges();
                }
                else
                {
                    TempData["message"] = "There is an account associated with this e-mail address. Control your e-mail address or try to login!";
                    return View();
                }
                return View();


            }


            return View();



        }

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
                //_context.Users.Add(login);
                //_context.SaveChanges();
            }
            return View();
        }
    }
}
