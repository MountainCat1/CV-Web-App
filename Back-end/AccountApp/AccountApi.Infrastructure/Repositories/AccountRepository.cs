using AccountApi.Domain.Entities;
using AccountApi.Domain.Repositories;
using AccountApi.Infrastructure.Contexts;
using AccountApi.Infrastructure.Generics;

namespace AccountApi.Infrastructure.Repositories;

public class AccountRepository : Repository<AccountEntity, AccountDbContext>, IAccountRepository
{
    public AccountRepository(AccountDbContext dbContext) : base(dbContext)
    {
    }
}