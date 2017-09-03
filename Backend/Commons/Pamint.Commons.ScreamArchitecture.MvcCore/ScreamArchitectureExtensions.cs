using Microsoft.AspNetCore.Mvc.Razor;
using Pamint.Commons.ScreamArchitecture.MvcCore;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ScreamArchitectureExtensions
    {
        public static IServiceCollection EnableScreamArchitecture(this IServiceCollection services)
            => services.Configure<RazorViewEngineOptions>(options =>
            {
                options.ViewLocationExpanders.Clear();
                options.ViewLocationExpanders.Add(new ScreamViewLocationExpander());
            });
    }
}