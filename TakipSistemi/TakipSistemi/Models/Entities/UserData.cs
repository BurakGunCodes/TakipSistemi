﻿using System.ComponentModel.DataAnnotations;

namespace TakipSistemi.Models.Entities
{
    public class UserData 
    {

        [Key]
        public int Id { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "Email address is Required")]
        [Display(Name = "Email Address Field")]
        public string? EmailAddr { get; set; }

        // [Range(1,10,ErrorMessage ="Minimum 1, Maximum 10 character")]
        [Required(ErrorMessage = "Password is Required")]
        [Display(Name = "Password Field")]
        public string? Password { get; set; }

        [Required(ErrorMessage = "Name is Required")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "Surname is Required")]
        public string? Surname { get; set; }


        public string? Birthdate { get; set; }

        public string? Gender { get; set; }

    }
}
