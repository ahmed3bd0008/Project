using Core.Email;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Repository.Configuration
{
    public class configureSendEmail : IEntityTypeConfiguration<MessageSended>
    {
        public void Configure(EntityTypeBuilder<MessageSended> builder)
        {
            builder.HasKey(d=>new {d.SendedDate,d.MessageId,d.EmailId});
            builder.HasOne(d=>d.email).WithMany(d=>d.messageSended).HasForeignKey(d=>d.EmailId);
            builder.HasOne(d=>d.message).WithMany(d=>d.messageSended).HasForeignKey(d=>d.MessageId);
        }
    }
}