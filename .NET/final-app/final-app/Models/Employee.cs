using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace final_app.Models
{
    public class Employee
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public string City { get; set; }
        public string PhoneNumber { get; set; }

        public string Role { get; set; }


    }
}
