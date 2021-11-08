using final_app.Models;
using final_app.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace final_app.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : Controller
    {
        readonly IEmployeeCollectionService _employeeCollectionService;


        public EmployeeController(IEmployeeCollectionService employeeCollectionService)
        {
            _employeeCollectionService = employeeCollectionService;
        }


        /// <summary>
        ///     Return all the employees
        /// </summary>
        /// <returns></returns>
        [HttpGet("/Employees")]
        public async Task<IActionResult> GetAllEmployees()
        {
            try
            {
                List<Employee> owners = await _employeeCollectionService.GetAll();
                return Ok(owners);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.StackTrace);
                return BadRequest("Owner cannot be null");
            }

        }


        /// <summary>
        ///   Add a new employee to the list
        /// </summary>
        /// <param name="employeeToAdd"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee employeeToAdd)
        {
            if (employeeToAdd == null)
            {
                return BadRequest("Employee cannot be null");
            }

            if (await _employeeCollectionService.Create(employeeToAdd))
            {
                return Ok();
            }

            return NoContent();

        }


        /// <summary>
        ///     Delete a specified employee
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(Guid id)
        {

            var index = await _employeeCollectionService.Delete(id);
            if (index == false)
            {
                return NotFound();

            }

            return NoContent();

        }


        /// <summary>
        ///     Update a specified employee
        /// </summary>
        /// <param name="id"></param>
        /// <param name="employeeToUpdate"></param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(Guid id, [FromBody] Employee employeeToUpdate)
        {
            if (employeeToUpdate == null)
            {
                return BadRequest("Employee cannot be null");
            }

            var index = await _employeeCollectionService.Update(id, employeeToUpdate);

            if (index == false)
            {
                return NotFound();
            }

            return NoContent();

        }

        /// <summary>
        ///     Return a note find by a specified id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
        {

            Employee employee = await _employeeCollectionService.Get(id);
            if (employee == null)
            {
                return BadRequest("Note was not found");
            }
            return Ok(employee);
        }
    }
}
