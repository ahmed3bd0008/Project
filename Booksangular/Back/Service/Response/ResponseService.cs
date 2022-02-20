using System.Collections.Generic;

namespace Service.Response
{
    public class ResponseService <T>
    {
        public bool Status { get; set; }
        public T Data{ get; set; }
        public List<string> Error { get; set; }
        public string Message { get; set; }
    }
}