using System.ComponentModel.DataAnnotations;
using Account.Domain.Abstractions;

namespace Account.Domain.Entities;

public class AccountEntity : IEntity
{
    [Key]
    public Guid Guid { get; set; }
    
    public string AccountName { get; set; }
    public string PasswordHash { get; set; }
    
    public DateTime AccoutCreationTime { get; set; }
}