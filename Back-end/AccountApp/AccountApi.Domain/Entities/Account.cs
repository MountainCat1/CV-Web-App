using System.ComponentModel.DataAnnotations;
using AccountApi.Domain.Abstractions;

namespace AccountApi.Domain.Entities;

public class AccountEntity : IEntity
{
    [Key]
    public Guid Guid { get; set; }
    
    public string AccountName { get; set; }
    public string PasswordHash { get; set; }
    
    public DateTime AccountCreationTime { get; set; }
}