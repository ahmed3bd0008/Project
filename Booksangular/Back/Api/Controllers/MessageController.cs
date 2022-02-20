using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Dto.EmailDto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Service.Interface;

namespace Api.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class MessageController : ControllerBase
    {
        private readonly ILogger<MessageController> _logger;
        private readonly IMessageService _messageService;
       public MessageController(ILogger<MessageController> logger,IMessageService messageService)
        {
            _logger = logger;
            _messageService=messageService;
        }
        [HttpGet("GetAllMessahe")]
        public IActionResult GetAllMessage(){
            return Ok();
        }
        [HttpPost("AddMessage")]
        public IActionResult AddMessage([FromForm]addMessageDto addMessageDto ){

            return Ok(_messageService.addMessage(addMessageDto));
        }
          [HttpPost("AddEmail")]
        public IActionResult AddEmail([FromForm]addEmailDto addEmailDto ){

            return Ok(_messageService.addEmail(addEmailDto));
        }
       
    }
}
