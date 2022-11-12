using Microsoft.EntityFrameworkCore;

namespace Account.Data.Contexts;

public class AccountDbContext : DbContext
{
    public AccountDbContext(DbContextOptions<AccountDbContext> options) : base(options)
    {
        
    }
}