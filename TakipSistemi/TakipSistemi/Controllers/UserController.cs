using Microsoft.AspNetCore.Mvc;
using TakipSistemi.Models;
using TakipSistemi.Models.Entities;
using TakipSistemi.Models.ModelDtos;

namespace TakipSistemi.Controllers
{
    public class UserController : Controller
    {
        SystemDbContext _context = new SystemDbContext();


        [HttpGet]
        public IActionResult UserCreate()
        {

            UserDataCreate userDataCreate = new UserDataCreate();

            


           return View(userDataCreate);
        }

        [HttpPost]
        public IActionResult UserCreate(UserDataCreate userDataCreate)
        {

            if (ModelState.IsValid)
            {
                if(userDataCreate.Password == userDataCreate.ConfirmPassword)
                {
                    //userDataCreate i User Dataya donuştür;

                    UserData userData = new UserData()
                    {
                        Birthdate = userDataCreate.Birthdate,
                        EmailAddr = userDataCreate.EmailAddr,
                        Gender = userDataCreate.Gender,
                        Name = userDataCreate.Name,
                        Password = userDataCreate.Password,
                        Surname = userDataCreate.Surname                     
                    };

                    _context.Users.Add(userData);

                int sonuc=    _context.SaveChanges();
                }

            }
                return View();
        }
    }
}
