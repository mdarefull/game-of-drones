using GameOfDrones.Presentation.MvcCore.Startup.Application;
using GameOfDrones.Presentation.MvcCore.Startup.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace GameOfDrones.Presentation.MvcCore.Startup
{
    public class Startup
    {
        private IConfigurationRoot Configuration { get; }
        private IHostingEnvironment Environment { get; }
        public Startup(IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            Configuration = new ConfigurationBuilder()
                                .SetBasePath(env.ContentRootPath)
                                .AddJsonFile("appsettings.json")
                                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", true)
                                .AddEnvironmentVariables()
                                .Build();

            loggerFactory.AddConsole(Configuration.GetSection("Logging"))
                         .AddDebug(LogLevel.Trace);

            var logger = loggerFactory.CreateLogger<Startup>();
            logger.LogInformation($"Runing in environment {env.EnvironmentName}");
            Environment = env;
        }

        public void ConfigureServices(IServiceCollection services)
            => new ServicesConfigurator(services, Configuration, Environment)
                   .Configure();

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
            => new ApplicationConfigurator(app, env)
               .Configure();
    }
}
