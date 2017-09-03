namespace Microsoft.Extensions.DependencyInjection
{
    public interface IServicesConfigurator
    {
        // The reason I've excluded the IServiceCollection argument from this method is to allow the 
        //  maximum flexibility to the users, so they won't be restricted to configure the services
        //  through that API only
        void Configure();
    }
}