using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Practices.Unity;

namespace UnityApp
{
    class Program
    {
        static void Main(string[] args)
        {
            IUnityContainer container = new UnityContainer();
            container.RegisterType<ICalculateService, CalculateTrueService>();
            
            container.RegisterTypes(AllClasses.FromAssemblies(Assembly.GetEntryAssembly()),
                 WithMappings.FromMatchingInterface, WithName.Default, WithLifetime.Transient, null, true);


            //container.RegisterType<Customer>();
            //container.RegisterType<ICalculateService, CalculateFalseService>();

            Customer customerObject = container.Resolve<Customer>();
            customerObject.WriteCalculateResult();
            Console.ReadKey();
        }
    }
}
