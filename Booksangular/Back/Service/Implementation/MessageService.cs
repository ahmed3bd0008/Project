using System.Threading.Tasks;
using AutoMapper;
using Core.Dto.EmailDto;
using Core.Email;
using Repository.Interface;
using Service.Interface;

namespace Service.Implementation
{
    public class MessageService : IMessageService
    {
        private readonly IUntityOfWork _untityOfWork;
        private readonly IMapper _mapper;

        public MessageService(IUntityOfWork untityOfWork,IMapper mapper)
        {
            _untityOfWork=untityOfWork;
            _mapper=mapper;
        }

        public int addEmail(addEmailDto addEmailDto)
        {
            Email email=new Email();
            email.EmailName=addEmailDto.EmailName;
            _untityOfWork.EmailRepstiory.AddEntity(email);
            return _untityOfWork.save();
        }

        public int UpdateEmail(EmailDto messageDto)
        {
            throw new System.NotImplementedException();
        }



        public int addMessage(addMessageDto addMessageDto)
        {
            Message message=_mapper.Map<Message>(addMessageDto);
            _untityOfWork.MessageRepstiory.AddEntity(message);
            return _untityOfWork.save();
        }
        public Task<int> addMessageAsync(addMessageDto addMessageDto)
        {
            throw new System.NotImplementedException();
        }

        public int UpdateMassage(MessageDto messageDto)
        {
            throw new System.NotImplementedException();
        }
    }
}