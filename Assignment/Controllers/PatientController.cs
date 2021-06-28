using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Assignment.Data;
using Assignment.Models;
using Microsoft.AspNetCore.Http;

namespace Assignment.Controllers
{
    [Route("api/[controller]")]
    public class PatientController : Controller
    {
        private readonly Context _context;
        public PatientController(Context context)
        {
            _context = context;
        }

        // GET: all patients
        [HttpGet, Route("all")]
        public async Task<IActionResult> GetAllPatients()
        {
            try
            {
                PatientDataService service = new PatientDataService(_context);
                return Ok(service.GetAllPatients());
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error occured while getting all the patients: " + ex.ToString());
            }
        }

        // GET: patients by pagination
        [HttpGet, Route("items")]
        public async Task<IActionResult> GetPatientsByPagination([FromQuery] int pageNumber, [FromQuery] int pageSize)
        {
            try
            {
                PatientDataService service = new PatientDataService(_context);
                return Ok(service.GetPatientsWithPagination(pageSize, pageNumber));
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error occured while getting all the patients: " + ex.ToString());
            }
        }

        // GET: Patient/details?id=5
        [HttpGet, Route("details")]
        public async Task<IActionResult> Details([FromQuery] Guid? id)
        {
            try
            {
                if (id == null)
                {
                    return NotFound();
                }

                PatientDataService service = new PatientDataService(_context);
                Patient patient = service.GetPatientById(id.Value);

                if (patient == null)
                {
                    return NotFound();
                }

                return Ok(patient);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error occured while getting the patient details by id: " + ex.ToString());
            }
        }

        // POST: Patient/create
        [HttpPost, Route("create")]
        public async Task<IActionResult> Create([FromBody] Patient patient)
        {
            try
            {
                if (patient != null)
                {
                    PatientDataService service = new PatientDataService(_context);
                    Guid patientId =  service.CreatePatient(patient);
                    return Ok(patientId);
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error occured during the patient creation: " + ex.ToString());
            }
        }

        // Put: Patient/edit?id=5
        [HttpPut, Route("edit")]
        public async Task<IActionResult> Edit([FromQuery] Guid id, [FromBody] Patient patient)
        {
            if (id != patient.Id)
            {
                return NotFound();
            }

            try
            {
                PatientDataService service = new PatientDataService(_context);
                service.UpdatePatient(patient);
                return Ok();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientExists(patient.Id))
                {
                    return NotFound("No patient found with given patient id");
                }
                else
                {
                    throw;
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error occured while editting the patient: " + ex.ToString());
            }
        }

        // Delete: Patient/delete?id=5
        [HttpDelete("{id}"), Route("delete")]
        public async Task<IActionResult> Delete([FromQuery] Guid id)
        {
            try
            {
                PatientDataService service = new PatientDataService(_context);
                if (PatientExists(id))
                {
                    service.DeletePatient(id);
                    return Ok();
                }
                else
                    return NotFound("No patient found with given patient id");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error occured while editting the patient: " + ex.ToString());
            }
        }

        private bool PatientExists(Guid id)
        {
            return _context.Patient.Any(e => e.Id == id);
        }
    }
}
