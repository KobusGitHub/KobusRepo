using System;

namespace UnityApp
{
    public class Customer
    {
        private readonly ICalculateService calculateService;
        public string CustomerName { get; set; }

        public Customer(ICalculateService calculateService)
        {
            this.calculateService = calculateService;
        }

        public void WriteCalculateResult()
        {
            Console.Write(this.calculateService.Calculate());
        }
    }
}