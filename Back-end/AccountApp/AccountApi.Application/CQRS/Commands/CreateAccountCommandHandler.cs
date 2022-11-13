using AccountApi.Abstractions;
using MediatR;

namespace AccountApi.CQRS.Commands;

public class CreateAccountCommandHandler : ICommandHandler<CreateAccountCommand>
{
    public Task<Unit> Handle(CreateAccountCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}