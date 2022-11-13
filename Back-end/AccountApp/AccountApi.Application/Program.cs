using AccountApi.CQRS;
using AccountApi.Domain.Abstractions;
using AccountApi.Domain.Entities;
using AccountApi.Domain.Repositories;
using AccountApi.Infrastructure.Contexts;
using AccountApi.Infrastructure.Repositories;
using MediatR;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;

var services = builder.Services;

services.AddControllers();
services.AddEndpointsApiExplorer();
services.AddSwaggerGen();

if (builder.Environment.IsDevelopment())
    services.AddDbContext<AccountDbContext>(options => options.UseInMemoryDatabase("AccountDatabase"));
else
    services.AddDbContext<AccountDbContext>(options => options.UseSqlServer(configuration.GetConnectionString("Database")));

services.AddScoped<IAccountRepository, AccountRepository>();

services.AddMediatR(typeof(CqrsAssemblyMarker));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();