namespace Entity.DataTransferObject
{
    public class CompanyDto
    {
                public System.Guid Id { get; set; }
                public string Name { get; set; }
                public string FullAddress { get; set; }
    }
     public class AddCompanyDto
    {
                public string Name { get; set; }
                public string Address { get; set; }
                public string Country { get; set; }
    }
}