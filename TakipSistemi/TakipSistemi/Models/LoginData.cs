using MessagePack;
using System.ComponentModel.DataAnnotations;

namespace TakipSistemi.Models
{
    public class LoginData
    {
        [EmailAddress]
        [Required(ErrorMessage = "Email address is Required")]
        [Display(Name = "Email Address Field")]
        public string? EmailAddr { get; set; }

        // [Range(1,10,ErrorMessage ="Minimum 1, Maximum 10 character")]
        [Required(ErrorMessage = "Password is Required")]
        [Display(Name = "Password Field")]
        public string? Password { get; set; }

    }
}
