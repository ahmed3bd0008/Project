using System.Threading.Tasks;
using Core.Dto.EmailDto;

namespace Service.Interface
{
    public interface IMessageService
    {
        Task<int>addMessageAsync(addMessageDto addMessageDto);
        int addMessage(addMessageDto addMessageDto);
        int UpdateMassage(MessageDto messageDto);
         int addEmail(addEmailDto addEmailDto);
        int UpdateEmail(EmailDto EmailDto);
    }
}