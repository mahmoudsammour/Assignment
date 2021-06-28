using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    public class PatientsWithPaginationResultModel
    {
        //patients info
        public List<PaginationResultPatient> Patients { get; set; }
        
        //pagination info
        public int CurrentPage { get; set; }
        public int PageCount { get; set; }
        public int PageSize { get; set; }
        public int RowCount { get; set; }
        public int FirstRowOnPage { get; set; }
        public int LastRowOnPage { get; set; }
    }

    public class PaginationResultPatient
    {
        public string Name { get; set; }
        public int FileNo { get; set; }
        public string PhoneNumber { get; set; }
    }
}
