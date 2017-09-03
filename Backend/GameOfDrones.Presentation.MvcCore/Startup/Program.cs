using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace GameOfDrones.Presentation.MvcCore.Startup
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var applicationPath = Directory.GetCurrentDirectory();
            var configuration = new ConfigurationBuilder()
                                    .SetBasePath(applicationPath)
                                    .AddJsonFile("hosting.json")
                                    .Build();

            new WebHostBuilder()
                .UseConfiguration(configuration)
                .UseKestrel()
                .UseContentRoot(applicationPath)
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build()
                .Run();
        }
    }
}
