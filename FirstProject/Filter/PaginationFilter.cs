namespace FirstProject.Filter
{
    public class PaginationFilter
    {
       public int PageSize{get;}
       public int pageNumber{get;}
       public PaginationFilter()
    {
        this.PageNumber = 1;
        this.PageSize = 10;
    }
    public PaginationFilter(int pageNumber, int pageSize)
    {
        this.PageNumber = pageNumber < 1 ? 1 : pageNumber;
        this.PageSize = pageSize > 10 ? 10 : pageSize;
    }
    }
}