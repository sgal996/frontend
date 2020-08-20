using WebApplication1.Data.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using System.Linq;
using WebApplication1.Data;
using WebApplication1.Data.Repositories;

namespace WebApplication1.Data.Models
{
    public class DbInitializer
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            AppDbContext context =
                applicationBuilder.ApplicationServices.GetRequiredService<AppDbContext>();

            if (!context.ProductSorters.Any())
            {
                context.ProductSorters.AddRange(ProductSorters.Select(c => c.Value));
            }
            if (!context.UsersData.Any())
            {
                context.AddRange
                (
                    new User
                    {
                        FirstName = "David",
                        LastName = "Curkovic",
                        Email = "dcurkovic@hotmail.com",
                        Password = "test",
                        IsAdmin = true,
                        IsEmailVerified=true
                    },
                    new User
                    {
                        FirstName = "Dominik",
                        LastName = "Matic",
                        Email = "dmatic@hotmail.com",
                        Password = "testMatic",
                        IsAdmin = false,
                        IsEmailVerified = false
                    },
                    new User
                    {
                        FirstName = "Roko",
                        LastName = "Mitrovic",
                        Email = "rmitrovic@gmail.com",
                        Password = "testRoko",
                        IsAdmin = false,
                        IsEmailVerified = false
                    }
                );
            }

            if (!context.Products.Any())
            {
                context.AddRange
                (
                    new Product
                    {
                        Name = "Volkswagen",
                        Price = 50000,
                        Description = "Obiteljski auto",
                        ProductSorter = ProductSorters["Limuzina"],
                        ImageURL = "https://www.cicis.com/media/1138/pizza_trad_pepperoni.png",
                        InStock = true,
                        IsMostLiked = false
                    },
                    new Product
                    {
                        Name = "Mercedes",
                        Price = 45000,
                        Description = "Uvijek pali!",
                        ProductSorter = ProductSorters["Limuzina"],
                        ImageURL = "http://finedininglovers.cdn.crosscast-system.com/ImageAlbum/15522/original_burek-finedininglovers-greek.jpg",
                        InStock = true,
                        IsMostLiked = true
                    },
                    new Product
                    {
                        Name = "BMW",
                        Price = 70000,
                        Description = "Puno trosi!",
                        ProductSorter = ProductSorters["Limuzina"],
                        ImageURL = "https://fthmb.tqn.com/SKjfxljgeY0nBIglJsTCKXd-akk=/5120x3413/filters:fill(auto,1)/white-bread-467775351-58a6ffd23df78c345b657e2f.jpg",
                        InStock = true,
                        IsMostLiked = true
                    },
                    new Product
                    {
                        Name = "MAN",
                        Price = 100000,
                        Description = "Stvoren za velike udaljenosti!",
                        ProductSorter = ProductSorters["Kamion"],
                        ImageURL = "https://www.nautilusplus.com/content/uploads/2013/04/Bread.jpg",
                        InStock = true,
                        IsMostLiked = false
                    },
                    new Product
                    {
                        Name = "Suzuki",
                        Price = 40000,
                        Description = "Brzina i stabilnost!",
                        ProductSorter = ProductSorters["Motor"],
                        ImageURL = "http://www.jennycraig.com/statics/img/catalog/products/PI0202-048_fullwidth.jpg",
                        InStock = true,
                        IsMostLiked = false
                    },
                    new Product
                    {
                        Name = "Kawasaki",
                        Price = 45000,
                        Description = "Sigurnost na prvom mjestu!",
                        ProductSorter = ProductSorters["Motor"],
                        ImageURL = "http://www.creationfood.ca/wp-content/uploads/2015/02/croissants-korea-AFPrelax-151113.jpg",
                        InStock = true,
                        IsMostLiked = true
                    }
                );
            }

            context.SaveChanges();
        }

        private static Dictionary<string, ProductSorter> productSorters;
        public static Dictionary<string, ProductSorter> ProductSorters
        {
            get
            {
                if (productSorters == null)
                {
                    var productSortersList = new ProductSorter[]
                    {
                        new ProductSorter { Name = "Limuzina", Description="Obiteljski auti" },
                        new ProductSorter { Name = "Kamion", Description="Prijevoz tereta" },
                        new ProductSorter { Name = "Motor", Description="Brzina na dva kotaca" }

                    };

                    productSorters = new Dictionary<string, ProductSorter>();

                    foreach (ProductSorter sorter in productSortersList)
                    {
                        productSorters.Add(sorter.Name, sorter);
                    }
                }

                return productSorters;
            }
        }
    }
}

