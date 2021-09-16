using System.Linq;
using Contracts.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Entity.DataTransferObject;
using AutoMapper;
using System.Collections.Generic;
using System;
using Entity.Model;

namespace dokumen.pub_ultimate_aspnet_core_3_web_api.Controller
{
  [ApiController]
  [Route("api/companyies")]
   public class CompanyiesController:ControllerBase
   {
       private readonly IMangeRepository _mangeRepository;
                        private readonly ILogger<CompanyiesController> _logger;
                        private readonly IMapper _mapper;

                        public CompanyiesController(IMangeRepository mangeRepository,
                        ILogger<CompanyiesController> logger,IMapper mapper)
                        {
                                    _mangeRepository=mangeRepository;
                         
                                    _logger=logger;
                                    _mapper=mapper;
                        }
                        [HttpGet("GetAllCompanymanualmapping")]
                        public IActionResult GetAllCompanyManualmapping()
                        {
                                    try
                                    {
                                       var companies= _mangeRepository.componyRepository.FindAll(false).ToArray();
                                       var companyDtos=companies.Select(Company=>new CompanyDto()
                                       {
                                                   Id=Company.Id,
                                                   Name=Company.Name,
                                                   FullAddress=string.Join (' ',Company.Address,Company.Country,"hie")
                                       }
                                       );
                                       return Ok(companyDtos);
                                    }
                                    catch (System.Exception ex)
                                    {
                                       _logger.LogError($"tjier is some error with action {nameof(GetAllCompanyManualmapping)} is{ex.Message} in date {System.DateTime.Now}");
                                       return StatusCode(500,"thier is now response");
                                    }
                        }
                         [HttpGet("GetAllCompanyAutoMapper")]
                        public IActionResult GetAllCompanyAutoMapper()
                        {
                                    try
                                    {
                                       var companies= _mangeRepository.componyRepository.FindAll(false).ToArray();
                                       var companyDtos=_mapper.Map<List< CompanyDto>>(companies);
                                       return Ok(companyDtos);
                                    }
                                    catch (System.Exception ex)
                                    {
                                       _logger.LogError($"tjier is some error with action {nameof(GetAllCompanyAutoMapper)} is{ex.Message} in date {System.DateTime.Now}");
                                       return StatusCode(500,"thier is now response");
                                    }
                        }
                         [HttpGet("GetAllCompanyAutoMapperGlobelException")]
                        public IActionResult GetAllCompanyAutoMappeex()
                        {
                                   
                                       var companies= _mangeRepository.componyRepository.FindAll(false).ToArray();
                                       var companyDtos=_mapper.Map<List< CompanyDto>>(companies);
                                       return Ok(companyDtos);
                                    
                        }
                        [HttpGet("GetCompany/{Id}")]
                          public IActionResult GetCompanyAutoMapper(Guid Id)
                        {
                                   
                                       var company= _mangeRepository.componyRepository.GetCompany(Id,false);
                                       if(company==null) return NotFound();
                                       var companyDtos=_mapper.Map<CompanyDto>(company);
                                       return Ok(companyDtos);
                                    
                        }
                        [HttpPost("CreateCompany")]
                        public IActionResult CreateCompany([FromBody]AddCompanyDto addCompanyDto)
                        {
                           if(addCompanyDto ==null)
                           {
                              _logger.LogError("Thier is an error with company");
                              return NotFound();
                           }
                           var company=_mapper.Map<Company>(addCompanyDto);
                           _mangeRepository.componyRepository.Create(company);
                           _mangeRepository.Save();
                           var compoanyDto=_mapper.Map<CompanyDto>(company);
                           return Ok(compoanyDto);
                           //return  CreatedAtRoute("CompanyById", new { id = compoanyDto.Id }, compoanyDto);
                           // return CreatedAtRoute("companybyid",new{id=company.Id},compoanyDto);
                        }
                        [HttpPost("AddCompanyWithEmployees")]
                        public IActionResult AddCompanyWithEmployees(AddCompanywithEmployeesDto addCompanyDto)
                        {
                            if(addCompanyDto ==null)
                           {
                              _logger.LogError("Thier is an error with company");
                              return NotFound();
                           }
                           var company=_mapper.Map<Company>(addCompanyDto);
                           _mangeRepository.componyRepository.Create(company);
                          // _mangeRepository.Save();
                           var compoanyDto=_mapper.Map<CompanyDto>(company);
                           return Ok(compoanyDto);
                           
                        }
   } 
}