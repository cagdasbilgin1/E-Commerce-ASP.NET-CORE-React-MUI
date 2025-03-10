﻿// <auto-generated />
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20250305172236_SeedData")]
    partial class SeedData
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "9.0.2");

            modelBuilder.Entity("API.Entity.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<string>("ImageURL")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsActive")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<decimal>("Price")
                        .HasColumnType("TEXT");

                    b.Property<int>("Stock")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Iphone X Aciklama",
                            ImageURL = "1.jpg",
                            IsActive = true,
                            Name = "IPhone X",
                            Price = 10.00m,
                            Stock = 7000
                        },
                        new
                        {
                            Id = 2,
                            Description = "Iphone 13 Aciklama",
                            ImageURL = "2.jpg",
                            IsActive = true,
                            Name = "IPhone 13",
                            Price = 20.00m,
                            Stock = 4000
                        },
                        new
                        {
                            Id = 3,
                            Description = "Iphone 14 Aciklama",
                            ImageURL = "3.jpg",
                            IsActive = true,
                            Name = "IPhone 14",
                            Price = 30.00m,
                            Stock = 5000
                        },
                        new
                        {
                            Id = 4,
                            Description = "Iphone 15 Aciklama",
                            ImageURL = "4.jpg",
                            IsActive = false,
                            Name = "IPhone 15",
                            Price = 40.00m,
                            Stock = 6000
                        },
                        new
                        {
                            Id = 5,
                            Description = "Iphone 16 Aciklama",
                            ImageURL = "5.jpg",
                            IsActive = true,
                            Name = "IPhone 16",
                            Price = 50.00m,
                            Stock = 3000
                        },
                        new
                        {
                            Id = 6,
                            Description = "Iphone 16 Pro Max Aciklama",
                            ImageURL = "6.jpg",
                            IsActive = true,
                            Name = "IPhone 16 Pro Max",
                            Price = 70.00m,
                            Stock = 1000
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
