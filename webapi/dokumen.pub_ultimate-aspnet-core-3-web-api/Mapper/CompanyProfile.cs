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

              
               CreateMap<Employee,EmployeeDto>().ReverseMap()
             ;
         }      
    }
}