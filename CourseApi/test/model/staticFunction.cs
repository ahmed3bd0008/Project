using static System.Console;
namespace model
{
    public class staticfunction
    {
        public static int id { get; set; }=0;
        public int x { get; set; }
        public int newArh { get; init; } 
        public readonly int readInlyProperties ;
       public staticfunction(int prop1,int prop2)
       {
           newArh=prop1;
           readInlyProperties=prop2;
           
       }
        public staticfunction()
       {
          
           
       }
        static staticfunction()
       {
           WriteLine("muhammed");
       }
        public static void staticfun(){
            //cant use  loccal field not static into  static function
            //   WriteLine(x); 
        }

    //FUNCTION BE START OF CLASS LIKE STATIC CONSTRUCTOR
        [System.Runtime.CompilerServices.ModuleInitializer]
        internal static void InitAssembly()
        {
            id++;
            WriteLine("hgjgjgfjf");
        }
    }
}