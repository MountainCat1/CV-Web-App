using AccountApi.Domain.Abstractions;
using AccountApi.Domain.Entities;

namespace AccountApi.Domain.Repositories;

public interface IAccountRepository : IRepository<AccountEntity>
{
}