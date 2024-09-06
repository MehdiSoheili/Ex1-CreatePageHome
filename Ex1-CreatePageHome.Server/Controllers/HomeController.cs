using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ex1_CreatePageHome.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public List<string> Get()
        {
            return new List<string>() { "Page Home " };
        }
    }
}
