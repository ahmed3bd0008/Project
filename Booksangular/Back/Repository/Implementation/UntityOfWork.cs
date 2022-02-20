using System.Threading.Tasks;
using Core.Email;
using Repository.Context;
using Repository.Interface;
namespace Repository.Implementation
{
    public class UntityOfWork : IUntityOfWork
    {
        public UntityOfWork(TestContext context)
        {
            _context=context;
        }
        private GenericRepstiory<Message>_messageRepstiory;
        private GenericRepstiory<Email>_emailRepstiory;
        private readonly TestContext _context;

        public GenericRepstiory<Message> MessageRepstiory { 
            get{
                if(_messageRepstiory==null)
                    _messageRepstiory=new GenericRepstiory<Message>(_context);
                return _messageRepstiory;
            }
        }    
        public GenericRepstiory<Email> EmailRepstiory {
              get{
                if(_emailRepstiory==null)
                    _emailRepstiory=new GenericRepstiory<Email>(_context);
                return _emailRepstiory;
            }
             }

        public int save()
        {
            return _context.SaveChanges();
        }

        public async Task<int> saveAsync()
        {
            return await _context.SaveChangesAsync();
            
        }
    }
}