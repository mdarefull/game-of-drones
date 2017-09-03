using Microsoft.AspNetCore.Builder;
using System;

namespace Pamint.Commons.ApplicationConfiguration
{
    public abstract class MvcCoreApplicationConfigurator : IApplicationConfigurator
    {
        protected virtual IApplicationBuilder ApplicationBuilder { get; }
        protected virtual IServiceProvider ServiceProvider { get; }
        public MvcCoreApplicationConfigurator(IApplicationBuilder applicationBuilder)
        {
            ApplicationBuilder = applicationBuilder;
            ServiceProvider = ApplicationBuilder.ApplicationServices;
        }

        public abstract void Configure();
    }
}