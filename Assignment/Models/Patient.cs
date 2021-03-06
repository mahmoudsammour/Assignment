using Assignment.Extensions;
using System;
using System.Linq;
using System.Text.Json.Serialization;

namespace Assignment.Models
{
    public class Patient
    {
        public Guid Id { get; set; } 

        public string Name { get; set; }

        public int FileNo { get; set; }

        public string CitizenId { get; set; }

        public DateTime BirthDate { get; set; }

        public Gender Gender { get; set; }

        public string Nationality { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public string Country { get; set; }

        public string City { get; set; }

        public string Street { get; set; }

        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public string ContactPerson { get; set; }

        public string ContactRelation { get; set; }

        public string ContactPhone { get; set; }

        public DateTime FirstVisitDate { get; set; }

        public DateTime RecordCreationalDate { get; set; }
    }
    public enum Gender : int { Male = 0, Female = 1}
}
