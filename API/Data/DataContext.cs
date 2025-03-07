using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : DbContext
{
    public DbSet<Product> Products => Set<Product>();

    public DataContext(DbContextOptions options) : base(options)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>().HasData(
                new List<Product>()
                {
                    new Product {Id=1, Name = "IPhone X", Price=10.00m, Description = "Iphone X Aciklama", IsActive = true, ImageURL = "1.jpg", Stock = 7000},
                    new Product {Id=2, Name = "IPhone 13", Price=20.00m, Description = "Iphone 13 Aciklama", IsActive = true, ImageURL = "2.jpg", Stock = 4000},
                    new Product {Id=3, Name = "IPhone 14", Price=30.00m, Description = "Iphone 14 Aciklama", IsActive = true, ImageURL = "3.jpg", Stock = 5000},
                    new Product {Id=4, Name = "IPhone 15", Price=40.00m, Description = "Iphone 15 Aciklama", IsActive = false, ImageURL = "4.jpg", Stock = 6000},
                    new Product {Id=5, Name = "IPhone 16", Price=50.00m, Description = "Iphone 16 Aciklama", IsActive = true, ImageURL = "5.jpg", Stock = 3000},
                    new Product {Id=6, Name = "IPhone 16 Pro Max", Price=70.00m, Description = "Iphone 16 Pro Max Aciklama", IsActive = true, ImageURL = "6.jpg", Stock = 1000},
                }
            );
    }
}