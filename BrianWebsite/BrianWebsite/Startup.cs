using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BrianWebsite.Startup))]
namespace BrianWebsite
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
