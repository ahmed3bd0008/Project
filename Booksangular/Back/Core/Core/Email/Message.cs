using System.Collections.Generic;
using Core.Shared;
namespace Core.Email
{
    public class Message:Entity
    {
        public string MessageName { get; set; }
        public string Subject { get; set; }
        public ICollection <MessageSended>messageSended{ get; set; }
    }
}