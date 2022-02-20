using System;

namespace Core.Email
{
    public class MessageSended
    {
        public Guid EmailId { get; set; }
        public Guid MessageId { get; set; }
        public DateTime SendedDate { get; set; } 
        public Email email      {get;set;} 
        public Message message { get; set; }
    }
}