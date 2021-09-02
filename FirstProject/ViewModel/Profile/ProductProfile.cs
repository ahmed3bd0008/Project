using AutoMapper;
using FirstProject.ViewModel;
using FirstProject.Models;
namespace FirstProject.ViewModel.Profile
{
    public class ProductProfile:AutoMapper.Profile
    {
        public ProductProfile()
        {
            CreateMap<Product,AddProduct>().
            ForMember(d=>d.Name,d=>d.MapFrom(f=>f.Name)).
            ForMember(d=>d.Price,d=>d.MapFrom(f=>f.Price)).
            ForMember(d=>d.Describtion,d=>d.MapFrom(f=>f.Describtion)).
            ForMember(d=>d.CategoryID,d=>d.MapFrom(f=>f.CategoryID)).
            ReverseMap();
        }
    }
}