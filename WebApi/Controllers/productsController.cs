using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using WebApi.Data;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Products")]
    [EnableCors("AnyGET")]
    public class ProductsController : Controller
    {
        private readonly NORTHWNDContext _context;

        public ProductsController(NORTHWNDContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var products = await _context.Products.
                Include(x => x.OrderDetails).
                ToListAsync();
            foreach (var item in products)
            {
              var tt=  item.ProductName.LastIndexOf(".");
                
            }
            return Ok(products);
        }

        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
