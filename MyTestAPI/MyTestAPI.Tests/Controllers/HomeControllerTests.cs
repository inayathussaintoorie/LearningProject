using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using Xunit.Sdk;

namespace MyTestAPI.Tests.Controllers
{
    public class HomeControllerTestss
    {
        [Fact]
        public void Index()
        {
            Assert.True(true);
        }
    }
}
