using AutoMapper;
using Entity.Model;
using Entity.DataTransferObject;
namespace dokumen.pub_ultimate_aspnet_core_3_web_api.Mapper
{
    public class MapProfile:Profile
    {
           public MapProfile()
           {
              CreateMap<Company,CompanyDto>().
              ForMember(d=>d.FullAddress,opt=>opt.MapFrom(st=>string.Join(' ',st.Address,st.Country))).ReverseMap();

              
               CreateMap<Employee,EmployeeDto>().ReverseMap() ;
               CreateMap<Company,AddCompanyDto>().ReverseMap();
               CreateMap<Employee,AddEmployeeDto>().ReverseMap();
               CreateMap<Company,AddCompanywithEmployeesDto>().ForMember(opt=>opt.AddEmployeeDtos,d=>d.MapFrom(st=>st.Employees)).ReverseMap();
             ;
         }      
    }
}