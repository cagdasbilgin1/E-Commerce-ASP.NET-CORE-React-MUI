using API.Data;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("/api/products")]    //api/products
public class ProductsController : ControllerBase
{
    private readonly DataContext _context;
    public ProductsController(DataContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        var products = await _context.Products.ToListAsync();
        return Ok(products);
    }
    
    [HttpGet("{id}")]   //api/products/1
    public async Task<IActionResult> GetProduct(int? id)
    {
        if (id == null)
        {
            return NotFound();
        }
        
         //var product = await _context.Products.FirstOrDefaultAsync(p => p.Id == id);
         var product = await _context.Products.FindAsync(id);

         if (product == null)
         {
             return NotFound();
         }
         
         return Ok(product);
    }
}