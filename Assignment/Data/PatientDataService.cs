using Assignment.Extensions;
using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Data
{
    public class PatientDataService
    {
        private readonly Context _context;

        public PatientDataService(Context context)
        {
            _context = context;
        }

        public List<Patient> GetAllPatients()
        {
            try
            {
                return _context.Patient.ToList();
            }
            catch
            {
                throw;
            }
        }

        public PatientsWithPaginationResultModel GetPatientsWithPagination(int pageSize, int pageNumber = 1)
        {
            try
            {
                var pagedPatients = _context.Patient.GetPaged(pageNumber, pageSize);
                List<PaginationResultPatient> patients = new List<PaginationResultPatient>();

                foreach (var patient in pagedPatients.Results)
                {
                    patients.Add(new PaginationResultPatient()
                    {
                        Name = patient.Name,
                        FileNo = patient.FileNo,
                        PhoneNumber = patient.PhoneNumber
                    });
                }

                return new PatientsWithPaginationResultModel()
                {
                    Patients = patients,
                    CurrentPage = pagedPatients.CurrentPage,
                    FirstRowOnPage = pagedPatients.FirstRowOnPage,
                    LastRowOnPage = pagedPatients.LastRowOnPage,
                    PageCount = pagedPatients.PageCount,
                    PageSize = pagedPatients.PageSize,
                    RowCount = pagedPatients.RowCount
                };
            }
            catch
            {
                throw;
            }
        }

        public Patient GetPatientById(Guid patientId)
        {
            try
            {
                return _context.Patient.FirstOrDefault(m => m.Id == patientId);
            }
            catch
            {
                throw;
            }
        }

        public Guid CreatePatient(Patient patient)
        {
            try
            {
                patient.Id = Guid.NewGuid();
                patient.RecordCreationalDate = DateTime.UtcNow;
                _context.Add(patient);
                _context.SaveChanges();
                return patient.Id;
            }
            catch
            {
                throw;
            }
        }

        public bool DeletePatient(Guid patientId)
        {
            try
            {
                Patient patient = _context.Patient.Find(patientId);
                _context.Patient.Remove(patient);
                _context.SaveChanges();
                return true;
            }
            catch
            {
                throw;
            }
        }

        public bool UpdatePatient(Patient patient)
        {
            try
            {
                _context.Update(patient);
                _context.SaveChanges();
                return true;
            }
            catch
            {
                throw;
            }
        }
    }
}
