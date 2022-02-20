using System.Collections.Generic;
using Core.Shared;

namespace Core.Email
{
    public class Email:Entity
    {
        public string EmailName { get; set; }
        public ICollection <MessageSended>messageSended{ get; set; }
        
    }
}