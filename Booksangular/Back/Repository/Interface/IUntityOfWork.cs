using System.Threading.Tasks;
using Core.Email;
using Repository.Implementation;

namespace Repository.Interface
{
    public interface IUntityOfWork
    {
         public GenericRepstiory<Message> MessageRepstiory { get; }
         public GenericRepstiory<Email> EmailRepstiory { get; }
        public int save();
        public Task< int> saveAsync();
    }
}