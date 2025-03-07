using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class SeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageURL", "IsActive", "Name", "Price", "Stock" },
                values: new object[,]
                {
                    { 1, "Iphone X Aciklama", "1.jpg", true, "IPhone X", 10.00m, 7000 },
                    { 2, "Iphone 13 Aciklama", "2.jpg", true, "IPhone 13", 20.00m, 4000 },
                    { 3, "Iphone 14 Aciklama", "3.jpg", true, "IPhone 14", 30.00m, 5000 },
                    { 4, "Iphone 15 Aciklama", "4.jpg", false, "IPhone 15", 40.00m, 6000 },
                    { 5, "Iphone 16 Aciklama", "5.jpg", true, "IPhone 16", 50.00m, 3000 },
                    { 6, "Iphone 16 Pro Max Aciklama", "6.jpg", true, "IPhone 16 Pro Max", 70.00m, 1000 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 6);
        }
    }
}
