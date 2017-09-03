using GameOfDrones.DataAccess;
using GameOfDrones.Models;
using GameOfDrones.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace GameOfDrones.Presentation.MvcCore.Startup.Services
{
    /// <summary>
    /// Implementation of the Composition Root pattern to register the application's external service dependencies.
    /// </summary>
    public class ServicesConfigurator : MvcCoreServicesConfigurator
    {
        /// <summary>
        /// Gets the <see cref="IHostingEnvironment"/> of the application.
        /// </summary>
        protected virtual IHostingEnvironment Environment { get; }
        /// <summary>
        /// Gets the <see cref="IConfiguration"/> of the application.
        /// </summary>
        protected virtual IConfiguration Configuration { get; }
        public ServicesConfigurator(IServiceCollection services, IConfiguration configuration, IHostingEnvironment environment) : base(services)
        {
            Environment = environment;
            Configuration = configuration;
        }

        /// <inheritdoc />
        public override void Configure()
        {
            var connectionString = Configuration["Data:Db:ConnectionString"];
            Services.AddDbContext<GameOfDronesDbContext>(options => options.UseSqlServer(connectionString))
                    .RegisterDbContextRepository<Player, long, GameOfDronesDbContext>()
                    .AddTransient<IPlayerServices, PlayerServices>()
                    .EnableScreamArchitecture()
                    .AddMvc();
        }
    }
}
