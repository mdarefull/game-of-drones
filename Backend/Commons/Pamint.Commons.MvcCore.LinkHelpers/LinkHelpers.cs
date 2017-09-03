using System;

namespace Microsoft.AspNetCore.Mvc
{
    // TODO [COMMENT] In order to provide a full solution to tie views and the routes and its URLS
    //  you should ALWAYS use a View Model on the action methods
    //  So I will also be able to use nameof for the action method's parameters.
    public static class LinkHelpers
    {
        #region Type Name
        public static string TypeName<T>(string nameSuffix)
        {
            var typeName = typeof(T).Name;
            if (!typeName.EndsWith(nameSuffix))
                return typeName;

            return typeName.Substring(0, typeName.Length - nameSuffix.Length);
        }
        #endregion

        #region Controller Name
        public const string ControllerSuffix = "Controller";
        public static string ControllerName<TController>() where TController : Controller
            => TypeName<TController>(ControllerSuffix);
        #endregion

        #region ViewComponent Name
        public const string ViewComponentSuffix = "ViewComponent";
        public static string ViewComponentName<TViewComponent>() where TViewComponent : ViewComponent
            => TypeName<TViewComponent>(ViewComponentSuffix);
        #endregion

        #region Action & Member Name
        public static string ActionName<TController>(Func<TController, string> actionNameSelector) where TController : Controller
            => actionNameSelector(default(TController));

        public static string MemberName<TObject>(Func<TObject, string> memberNameSelector)
            => memberNameSelector(default(TObject));
        #endregion
    }
}