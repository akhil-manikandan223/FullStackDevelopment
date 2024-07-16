using OnlineShop.Models;
using OnlineShop.Extensions;
using OnlineShop.db;

namespace OnlineShop
{
    public class Program
    {
        public static void Main(string[] args)
        {


            //ProductsContext context = new ProductsContext();
            //var productsObj = new Products();

            // Console.WriteLine("Enter the Product name: ");
            //productsObj.ProductName = Console.ReadLine(); 
            //Console.WriteLine("Enter the Product type");
            //productsObj.ProductType = Console.ReadLine(); 
            //Console.WriteLine("Enter the Product company");
            //productsObj.ProductBrand = Console.ReadLine(); 
            //Console.WriteLine("Enter the Product price");
            //productsObj.ProductPrice = Convert.ToInt32(Console.ReadLine()); 
            //Console.WriteLine("Enter the Product discouted price");
            //productsObj.ProductDiscountedPrice = Convert.ToInt32(Console.ReadLine());
            //context.ProductsDbSet.Add(productsObj);
            //context.SaveChanges();

            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddServices(builder.Configuration);
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin",
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:4200")
                               .AllowAnyHeader()
                               .AllowAnyMethod();
                    });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors("AllowSpecificOrigin");

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
