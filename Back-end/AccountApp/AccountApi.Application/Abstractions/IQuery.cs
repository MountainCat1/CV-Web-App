using MediatR;

namespace AccountApi.Abstractions;

public interface IQuery<out TResult> : IRequest<TResult>
{
    
}