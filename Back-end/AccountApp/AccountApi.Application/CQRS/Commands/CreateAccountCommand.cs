using AccountApi.Abstractions;
using MediatR;

namespace AccountApi.CQRS.Commands;

public class CreateAccountCommand : ICommand
{
    public string AccountName { get; set; }
    public string Password { get; set; }
}