using System.Text;
using System.Linq;

namespace Microsoft.AspNetCore.Routing
{
    public static class RoutingHelpers
    {
        #region Template
        /// <summary>
        /// Helper method that play well with the string interpolation feature.
        /// It inverts the behavior of the Microsoft.AspNetCore.Routing system. 
        /// If it receives a string surrounded by '[' and ']' (instead of '{' and '}') it will take it as a static
        /// segment. In oppossition, it will take every string outside '[' and ']' as a segment variable and properly 
        /// surround it with '{' and '}' characters.
        /// It will also add a leading '/' in case it doesn't exists.
        /// </summary>
        /// <param name="segments"></param>
        /// <returns></returns>
        public static string Template(params string[] segments)
        {
            // Estimation, should be greater than the final length.
            var totalLenght = segments.Sum(s => s.Length) + 3 * segments.Length;
            var sb = new StringBuilder(totalLenght);
            foreach (var segment in segments)
                foreach (var innerSegment in segment.Split('/').Where(s => s.Any()))
                {
                    var finalSegment = TransformSegment(innerSegment);
                    sb.Append(finalSegment);
                }

            return sb.ToString();
        }
        private static string TransformSegment(string segment)
        {
            var sb = new StringBuilder(segment.Length + 3);

            var lastBrackedPos = 0;
            for (int i = 0; i < segment.Length; i++)
            {
                if (segment[i] == '[')
                {
                    var segmentVariable = ExtractSegmentVariable(segment, lastBrackedPos, i);
                    sb.Append(segmentVariable);
                    lastBrackedPos = i + 1;
                }
                else if (segment[i] == ']')
                {
                    var staticSegment = ExtractStaticSegment(segment, lastBrackedPos, i);
                    sb.Append(staticSegment);
                    lastBrackedPos = i + 1;
                }
            }

            return sb.Append(ExtractSegmentVariable(segment, lastBrackedPos, segment.Length))
                     .Append('/')
                     .ToString();
        }
        private static string ExtractSegmentVariable(string segment, int startPos, int endPos)
        {
            var lenght = endPos - startPos;
            if (lenght == 0)
                return "";

            var sb = new StringBuilder(lenght + 2);
            sb.Append('{');
            for (int i = startPos; i < endPos; i++)
                sb.Append(segment[i]);
            sb.Append('}');

            return sb.ToString();
        }
        private static string ExtractStaticSegment(string segment, int startPos, int endPos)
        {
            var sb = new StringBuilder(endPos - startPos);
            for (int i = startPos; i < endPos; i++)
                sb.Append(segment[i]);

            return sb.ToString();
        }
        #endregion
    }
}