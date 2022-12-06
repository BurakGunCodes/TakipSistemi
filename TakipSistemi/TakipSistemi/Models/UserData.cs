using System.ComponentModel.DataAnnotations;

namespace TakipSistemi.Models
{
    public class UserData : LoginData
    {
        [Required(ErrorMessage = "Name is Required")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "Surname is Required")]
        public string? Surname { get; set; }

        
        public string? Birthdate { get; set; }

        public string? Gender { get; set; }

    }
}
