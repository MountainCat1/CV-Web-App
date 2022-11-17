using AccountApi.Abstractions;
using AccountApi.Domain.Entities;
using AccountApi.Domain.Repositories;
using MediatR;

namespace AccountApi.CQRS.Commands;

public class CreateAccountCommandHandler : ICommandHandler<CreateAccountCommand>
{
    private readonly IAccountRepository _accountRepository;


    public CreateAccountCommandHandler(IAccountRepository accountRepository)
    {
        _accountRepository = accountRepository;
    }

    public async Task<Unit> Handle(CreateAccountCommand request, CancellationToken cancellationToken)
    {
        await _accountRepository.CreateAsync(new AccountEntity()
        {
            AccountName = request.AccountName,
            
            // TODO: HASH THIS PASSWORD
            PasswordHash = request.Password
        });
        
        return Unit.Value;
    }
}