namespace Microsoft.Extensions.DependencyInjection
{
    public abstract class MvcCoreServicesConfigurator : IServicesConfigurator
    {
        protected virtual IServiceCollection Services { get; }
        public MvcCoreServicesConfigurator(IServiceCollection services) { Services = services; }

        public abstract void Configure();
    }
}