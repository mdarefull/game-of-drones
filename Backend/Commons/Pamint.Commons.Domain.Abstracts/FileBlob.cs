using Pamint.Commons.Domain;

namespace Pamint.Conan.Domain
{
    public class FileBlob : ModelBase<int>
    {
        public virtual string Type { get; set; }
        public virtual byte[] Content { get; set; }


        #region Equals
        protected override bool AreEquals(ModelBase<int> other)
            => other is FileBlob; 
        #endregion
    }
}