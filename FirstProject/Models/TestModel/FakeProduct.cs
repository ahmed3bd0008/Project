public class  FakeProduct
{
    public string Name { get; set; }
    public decimal ? Price { get; set; }
    public  string Catogory { get; set; } ="whater balse";
    public bool InSocket { get;  }
    //without true default value you shoud define  new FakeProduct(true/false)
    public FakeProduct(bool inSocket=true)
    {
        this.InSocket=inSocket;
    }
    public static FakeProduct[]GetFakeProducts()
    {
               FakeProduct Kayan=new FakeProduct()
               {
                           Name="Kayan",
                           Price=27.5M,
                           Catogory="is sport"
               };
                FakeProduct Hits=new FakeProduct()
               {
                           Name="Hits",
                          
               };
               Kayan.RelatedProduct=Hits;
            return new FakeProduct[]{Kayan,Hits,null};

    }
            public FakeProduct RelatedProduct { get; set; }
}