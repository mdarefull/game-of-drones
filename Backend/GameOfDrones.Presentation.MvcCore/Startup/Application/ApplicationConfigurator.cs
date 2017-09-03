using GameOfDrones.DataAccess;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Pamint.Commons.ApplicationConfiguration;

namespace GameOfDrones.Presentation.MvcCore.Startup.Application
{
    /// <summary>
    /// Provides the configuration for the MvcCore application.
    /// </summary>
    public class ApplicationConfigurator : MvcCoreApplicationConfigurator
    {
        /// <summary>
        /// Information about the hosting environment.
        /// </summary>
        protected virtual IHostingEnvironment Environment { get; }
        public ApplicationConfigurator(IApplicationBuilder applicationBuilder, IHostingEnvironment environment) : base(applicationBuilder)
        {
            Environment = environment;
        }

        /// <inheritdoc />
        public override void Configure()
        {
            if (Environment.IsDevelopment())
            {
                ApplicationBuilder
                .UseDeveloperExceptionPage()
                .UseStatusCodePages();
            }

            ApplicationBuilder
            .UseCors(builders => builders.AllowAnyOrigin()
                                         .AllowAnyMethod()
                                         .AllowAnyHeader()
                                         .AllowCredentials())
            .UseStaticFiles()
            .UseMvcWithDefaultRoute();

            var context = ApplicationBuilder.ApplicationServices.GetRequiredService<GameOfDronesDbContext>();
            context.Database.Migrate();
        }
    }
}
