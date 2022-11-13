using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AccountApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AccountApi.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        [HttpPost("Create")]
        public async Task<IActionResult> CreateAccount([FromBody] CreateAccountModel model)
        {
            // TODO make this endpoint create an account
            return Ok();
        }
    }
}
