namespace AccountApi.Services;

public interface IAccountService
{
    public Task CreateAccount();
}

public class AccountService : IAccountService
{
    public Task CreateAccount()
    {
        throw new NotImplementedException();
    }
}