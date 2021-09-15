
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Contracts.Interface;
using Entity.Model;
using LoggerService;
using AutoMapper;
using System;
using System.Collections.Generic;
using Entity.DataTransferObject;

namespace dokumen.pub_ultimate_aspnet_core_3_web_api.Controllers
{
    [ApiController]
    [Route("api/")]
    public class EmployeeController : ControllerBase
    {
         private readonly ILoggerManger _logger;
         private readonly IMapper _mapper;
         private readonly IMangeRepository _mangeRepository;
                        public EmployeeController( ILoggerManger loggerManger,IMangeRepository mangeRepository,IMapper mapper)
                        {
                            _logger = loggerManger;
                            _mangeRepository=mangeRepository;
                            _mapper=mapper;
                        }
                        [HttpGet("Company/{CompanyId}/Employees")]
                        public IActionResult GetEmployeesFroCompany(Guid CompanyId )
                        {
                             var Employees= _mangeRepository.employeeRepository.GetEmployeesByCompany(CompanyId,false);
                             var employeeDto=_mapper.Map<List< EmployeeDto>>(Employees);
                             return Ok( employeeDto);
                        }
                        [HttpGet("Company/{CompanyId}Employee{Id}")]
                        public IActionResult GetEmployeeFroCompany(Guid CompanyId,Guid Id )
                        {    var company=_mangeRepository.componyRepository.GetCompany(CompanyId,false);
                            if (company==null)
                             {
                                 _logger.LogInfo($"company  with id: {CompanyId} doesn't exist in the database.");
                                 return NotFound();
                             }
                             var Employee= _mangeRepository.employeeRepository.GetEmployeeByCompany(CompanyId,Id,false);
                             if (Employee==null)
                             {
                                 _logger.LogInfo($"Employe  with id: {Id} doesn't exist in the database. in company {company.Name}");
                                 return NotFound();
                             }
                             var employeeDto=_mapper.Map<EmployeeDto>(Employee);
                             return Ok( employeeDto);
                        }
                        
                    

        
    }
}
