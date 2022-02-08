using System;
using model;
namespace test
{
    class Program
    {
        static void Main(string[] args)
        {
            staticfunction staticfunction=new staticfunction(10,10);
           
            Console.WriteLine($"init  {staticfunction.newArh.ToString()} , readonly properties {staticfunction.readInlyProperties}");
            staticfunction staticfunction1=new() {
                //set init properties in object intail 
                newArh =12,
                // cant set read only properties in object intial
                //readInlyProperties=5,
            };
          
            Console.WriteLine(staticfunction.id);

        }
    }
}
