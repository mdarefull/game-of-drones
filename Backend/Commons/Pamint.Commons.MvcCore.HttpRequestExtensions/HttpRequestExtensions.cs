namespace Microsoft.AspNetCore.Http
{
    public static class HttpRequestExtensions
    {
        public static string PathAndQuery(this HttpRequest request)
            // TODO [CHECK] Does this works, or should I use the 2nd option?
            => request.Path + request.QueryString.ToString();
          //=> request.Path + (request.QueryString.HasValue ? request.QueryString.ToString() : string.Empty);
    }
}