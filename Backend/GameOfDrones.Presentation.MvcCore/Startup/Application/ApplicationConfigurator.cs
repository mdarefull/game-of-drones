using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
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

        /// <inheritdoc>
        public override void Configure()
        {
            if (Environment.IsDevelopment())
            {
                ApplicationBuilder
                .UseDeveloperExceptionPage()
                .UseStatusCodePages();
            }
            else
                ApplicationBuilder
                .UseExceptionHandler("/Error");

            ApplicationBuilder
            .UseStaticFiles()
            .UseMvcWithDefaultRoute();
        }
    }
}
