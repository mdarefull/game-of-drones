using Microsoft.AspNetCore.Mvc.Razor;
using System.Collections.Generic;

namespace Pamint.Commons.ScreamArchitecture.MvcCore
{
    internal class ScreamViewLocationExpander : IViewLocationExpander
    {
        public virtual IEnumerable<string> ExpandViewLocations(ViewLocationExpanderContext context, IEnumerable<string> viewLocations)
        {
            yield return "/{1}/Views/{0}.cshtml";
            yield return "/{1}/Views/Shared/{0}.cshtml";
            yield return "/Shared/Views/{0}.cshtml";
        }

        public virtual void PopulateValues(ViewLocationExpanderContext context) { }
    }
}